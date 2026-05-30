import { getAllSubmissions } from '@/lib/storage';
import { COMPANY } from '@/lib/config';
import { headers } from 'next/headers';
import { redirect } from 'next/navigation';

function formatDate(iso: string) {
  return new Date(iso).toLocaleString('en-IN', {
    day: '2-digit', month: 'short', year: 'numeric',
    hour: '2-digit', minute: '2-digit',
  });
}

export default function AdminPage({
  searchParams,
}: {
  searchParams: { key?: string };
}) {
  const adminKey = process.env.ADMIN_KEY ?? 'eastcoast2024';
  if (searchParams.key !== adminKey) {
    redirect('/admin/login');
  }

  const submissions = getAllSubmissions();

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-5 flex items-center justify-between sticky top-0 z-10">
        <div className="flex items-center gap-3">
          <span className="font-heading font-bold text-xl text-gray-900">
            {COMPANY.name}<span className="text-red-600">.</span>
          </span>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-medium text-gray-500">Inquiry Dashboard</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-700 bg-green-50 border border-green-200 px-3 py-1.5 rounded-full">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            {submissions.length} Total Inquiries
          </span>
        </div>
      </div>

      <div className="px-8 py-8 max-w-[1400px] mx-auto">
        {/* Stats row */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: 'Total Inquiries', value: submissions.length },
            { label: 'This Month', value: submissions.filter(s => new Date(s.receivedAt).getMonth() === new Date().getMonth()).length },
            { label: 'Unique Companies', value: new Set(submissions.map(s => s.company)).size },
            { label: 'With Attachments', value: submissions.filter(s => s.fileName).length },
          ].map(stat => (
            <div key={stat.label} className="bg-white rounded-2xl border border-gray-200 px-6 py-5">
              <div className="text-2xl font-heading font-bold text-gray-900">{stat.value}</div>
              <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {submissions.length === 0 ? (
          <div className="bg-white rounded-2xl border border-gray-200 p-16 text-center">
            <div className="text-4xl mb-4">📭</div>
            <h3 className="font-heading font-semibold text-lg text-gray-700 mb-2">No inquiries yet</h3>
            <p className="text-sm text-gray-400">Submissions from the contact form will appear here.</p>
          </div>
        ) : (
          <div className="space-y-4">
            {submissions.map((s) => (
              <div key={s.id} className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-md transition-shadow">
                {/* Card header */}
                <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 border-b border-gray-100 bg-gray-50">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-xl bg-red-600 flex items-center justify-center text-white font-bold text-sm">
                      {s.company.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <div className="font-heading font-semibold text-gray-900">{s.company}</div>
                      <div className="text-xs text-gray-500">{s.name}</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 flex-wrap">
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-gray-200 text-gray-600">
                      {s.category}
                    </span>
                    <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-blue-50 text-blue-700 border border-blue-200">
                      {s.moq}
                    </span>
                    {s.fileName && (
                      <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-amber-50 text-amber-700 border border-amber-200">
                        📎 {s.fileName}
                      </span>
                    )}
                    <span className="text-xs text-gray-400">{formatDate(s.receivedAt)}</span>
                    <span className="text-[10px] font-mono text-gray-300">{s.id}</span>
                  </div>
                </div>

                {/* Card body */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-gray-100">
                  <div className="px-6 py-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Email</div>
                    <a href={`mailto:${s.email}`} className="text-sm text-blue-600 hover:underline break-all">
                      {s.email}
                    </a>
                  </div>
                  <div className="px-6 py-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Phone</div>
                    <div className="text-sm text-gray-800">{s.phone || '—'}</div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Country</div>
                    <div className="text-sm text-gray-800">{s.country || '—'}</div>
                  </div>
                  <div className="px-6 py-4">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-1">Reply</div>
                    <a
                      href={`mailto:${s.email}?subject=Re: Your inquiry — ${COMPANY.name}&body=Dear ${s.name},%0D%0A%0D%0AThank you for your inquiry...`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-white bg-red-600 px-3 py-1.5 rounded-lg hover:bg-red-700 transition-colors"
                    >
                      Reply →
                    </a>
                  </div>
                </div>

                {/* Requirements */}
                <div className="px-6 pb-5">
                  <div className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mb-2">Requirements</div>
                  <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 rounded-xl p-4 border border-gray-100 whitespace-pre-wrap">
                    {s.requirements}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
