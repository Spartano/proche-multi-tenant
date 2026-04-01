import { PText, PTag } from '@porsche-design-system/components-react';
import { PageLayout } from '../components/PageLayout';
import { ExerciseInfo } from '../components/ExerciseInfo';

const mockCases = [
  { id: 'CASE-001', title: 'User authentication issue', status: 'Open', priority: 'High' },
  { id: 'CASE-002', title: 'Payment processing delay', status: 'In Progress', priority: 'Critical' },
  { id: 'CASE-003', title: 'Dashboard loading slowly', status: 'Resolved', priority: 'Medium' },
  { id: 'CASE-004', title: 'Export functionality broken', status: 'Open', priority: 'Low' },
];

export function Cases() {
  return (
    <PageLayout
      title="Cases"
      description="Manage and track all support cases"
    >
      <ExerciseInfo title="Cases — Access Rules">
        <p>
          <strong>Roles:</strong> Admin, Analyst, Viewer &nbsp;|&nbsp;
          <strong>Required Tier:</strong> Tier 1+
        </p>
        <p>
          Like Dashboard, this page should be accessible to everyone. It represents baseline
          functionality available on the lowest subscription tier.
        </p>
      </ExerciseInfo>

      <div className="bg-surface rounded-md border-2 border-contrast-low overflow-hidden mt-fluid-md">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-canvas border-b-2 border-contrast-low">
              <tr>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Case ID</PText>
                </th>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Title</PText>
                </th>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Status</PText>
                </th>
                <th className="text-left p-static-md">
                  <PText size="small" weight="semibold">Priority</PText>
                </th>
              </tr>
            </thead>
            <tbody>
              {mockCases.map((caseItem) => (
                <tr key={caseItem.id} className="border-b border-contrast-low last:border-0">
                  <td className="p-static-md">
                    <PText size="small" className="text-primary">{caseItem.id}</PText>
                  </td>
                  <td className="p-static-md">
                    <PText size="small">{caseItem.title}</PText>
                  </td>
                  <td className="p-static-md">
                    <PTag
                      color={
                        caseItem.status === 'Resolved'
                          ? 'notification-success'
                          : caseItem.status === 'In Progress'
                          ? 'notification-info-soft'
                          : 'notification-warning'
                      }
                    >
                      {caseItem.status}
                    </PTag>
                  </td>
                  <td className="p-static-md">
                    <PText size="small">{caseItem.priority}</PText>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </PageLayout>
  );
}
