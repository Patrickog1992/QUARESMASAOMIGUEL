import { RosaryIcon } from './rosary-icon';
import { OurLadyIcon } from './our-lady-icon';

export function BackgroundPattern() {
  return (
    <div className="absolute inset-0 z-0 opacity-[0.03] text-foreground pointer-events-none">
      <RosaryIcon className="absolute top-[5%] left-[10%] w-24 h-24 transform -rotate-12" />
      <OurLadyIcon className="absolute top-[15%] right-[5%] w-32 h-32 transform rotate-6" />
      <RosaryIcon className="absolute top-[40%] left-[20%] w-20 h-20 transform rotate-12" />
      <OurLadyIcon className="absolute top-[55%] right-[15%] w-28 h-28 transform -rotate-6" />
      <OurLadyIcon className="absolute bottom-[10%] left-[5%] w-40 h-40 transform rotate-15" />
      <RosaryIcon className="absolute bottom-[2%] right-[25%] w-24 h-24 transform -rotate-15" />
      <OurLadyIcon className="absolute top-[50%] left-[45%] w-16 h-16 transform -rotate-20" />
      <RosaryIcon className="absolute top-[5%] right-[35%] w-16 h-16 transform rotate-45" />
    </div>
  );
}
