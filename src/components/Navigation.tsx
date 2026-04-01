import { NavLink } from "react-router-dom";
import { PIcon, type IconName } from "@porsche-design-system/components-react";
import { NAVIGATION_ITEMS } from "../data/mockData";
import { ExerciseInfo } from "./ExerciseInfo";

export function Navigation() {
  // TODO: Import useAuthorization from '../hooks/useAuthorization' and use
  // its hasAccess() method to filter NAVIGATION_ITEMS so that only features
  // the current user can access appear in the nav.
  const accessibleItems = NAVIGATION_ITEMS;

  return (
    <nav className="w-80 bg-surface border-r-2 border-contrast-low min-h-screen p-fluid-md">
      <ul className="flex flex-col gap-static-xs">
        {accessibleItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-static-md p-static-md rounded-md transition-colors ${
                  isActive
                    ? "bg-canvas text-primary"
                    : "text-contrast-medium hover:bg-canvas hover:text-primary"
                }`
              }
            >
              <PIcon
                name={item.icon as IconName}
                size="medium"
                aria-hidden="true"
              />
              <span className="prose-text-md">{item.label}</span>
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="mt-fluid-md min-w-0">
        <ExerciseInfo title="Filtered Navigation (Task 5)">
          <p className="break-words">
            Showing <strong>{NAVIGATION_ITEMS.length}</strong> of {NAVIGATION_ITEMS.length} items
            (no filtering applied).
          </p>
          <p className="break-words mt-1">
            The candidate must use <code className="break-all">useAuthorization</code> to
            filter <code className="break-all">NAVIGATION_ITEMS</code> so that inaccessible
            features never appear.
          </p>
        </ExerciseInfo>
      </div>
    </nav>
  );
}
