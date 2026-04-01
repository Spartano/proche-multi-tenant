import { PText, PIcon } from '@porsche-design-system/components-react';
import type { ReactNode } from 'react';

interface ExerciseInfoProps {
  title: string;
  children: ReactNode;
}

export function ExerciseInfo({ title, children }: ExerciseInfoProps) {
  return (
    <div className="bg-[#e8f4fd] border-2 border-[#90caf9] rounded-md p-static-md">
      <div className="flex items-start gap-static-sm">
        <PIcon name="information" size="small" className="text-[#1565c0] mt-[2px] shrink-0" />
        <div>
          <PText size="small" weight="bold" className="text-[#1565c0] mb-static-xs">
            {title}
          </PText>
          <div className="text-[#1565c0] text-xs leading-relaxed space-y-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
