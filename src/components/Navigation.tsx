import { NavLink } from 'react-router-dom';
import { PIcon, PText, type IconName } from '@porsche-design-system/components-react';
import { useAuthorization } from '../hooks/useAuthorization';
import { NAVIGATION_ITEMS } from '../data/mockData';
import { ExerciseInfo } from './ExerciseInfo';

export function Navigation() {
  const { hasAccess } = useAuthorization();
  const accessibleItems = NAVIGATION_ITEMS.filter((item) => hasAccess(item.feature));
  const hiddenCount = NAVIGATION_ITEMS.length - accessibleItems.length;

  return (
    <nav className="w-64 bg-surface border-r-2 border-contrast-low min-h-screen p-fluid-md">
      <ul className="flex flex-col gap-static-xs">
        {accessibleItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-static-md p-static-md rounded-md transition-colors ${
                  isActive
                    ? 'bg-canvas text-primary'
                    : 'text-contrast-medium hover:bg-canvas hover:text-primary'
                }`
              }
            >
              <PIcon name={item.icon as IconName} size="medium" aria-hidden="true" />
              <span className="prose-text-md">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-fluid-md">
        <ExerciseInfo title="Filtered Navigation">
          <p>
            Showing <strong>{accessibleItems.length}</strong> of {NAVIGATION_ITEMS.length} items.
            {hiddenCount > 0 && (
              <> <strong>{hiddenCount} hidden</strong> due to role/tier restrictions.</>
            )}
          </p>
          <PText size="xx-small" className="text-[#1565c0] mt-static-xs">
            The candidate must use <code>useAuthorization</code> to filter <code>NAVIGATION_ITEMS</code> so
            that inaccessible features never appear.
          </PText>
        </ExerciseInfo>
      </div>
    </nav>
  );
}
