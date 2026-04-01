import { PText, PButton, PIcon } from '@porsche-design-system/components-react';
import { PageLayout } from '../components/PageLayout';
import { ExerciseInfo } from '../components/ExerciseInfo';

const mockReports = [
  { id: 'RPT-001', name: 'Monthly Performance Report', generated: '2024-03-15', type: 'Performance' },
  { id: 'RPT-002', name: 'User Activity Summary', generated: '2024-03-14', type: 'Activity' },
  { id: 'RPT-003', name: 'Case Resolution Metrics', generated: '2024-03-13', type: 'Metrics' },
];

export function Reports() {
  return (
    <PageLayout
      title="Reports"
      description="Generate and view analytical reports"
    >
      <ExerciseInfo title="Reports — Access Rules (Tasks 5 & 6)">
        <p>
          <strong>Roles:</strong> Admin, Analyst &nbsp;|&nbsp;
          <strong>Required Tier:</strong> Tier 2 only
        </p>
        <p>
          This is a <strong>Tier 2 feature</strong>. Viewers cannot access it regardless of tier.
          On Tier 1, even Admins and Analysts should not see it in the nav (Task 5), and directly
          navigating to <code>/reports</code> should redirect to Access Denied (Task 6).
        </p>
      </ExerciseInfo>

      <div className="mb-fluid-md mt-fluid-md">
        <PButton icon="add">Generate New Report</PButton>
      </div>

      <div className="grid grid-cols-1 gap-fluid-sm">
        {mockReports.map((report) => (
          <div
            key={report.id}
            className="bg-surface p-fluid-md rounded-md border-2 border-contrast-low flex items-center justify-between"
          >
            <div className="flex items-center gap-static-md">
              <PIcon name="document" size="medium" className="text-primary" />
              <div>
                <PText size="medium" weight="semibold" className="mb-static-xs">
                  {report.name}
                </PText>
                <PText size="small" className="text-contrast-medium">
                  {report.type} • Generated {report.generated}
                </PText>
              </div>
            </div>
            <PButton variant="secondary" icon="download">Download</PButton>
          </div>
        ))}
      </div>
    </PageLayout>
  );
}
