'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';

import { cn } from '@/lib/utils';

const Slider = React.forwardRef(
	(
		{ className, label, min, max, step, value, onValueChange, ...props },
		ref
	) => {
		const handleValueChange = (values) => {
			if (onValueChange) {
				onValueChange(values[0]); // Assuming single value slider, Radix Slider returns array of values
			}
		};

		return (
			<div className="flex flex-col gap-2">
				{label && <label className="">{label}</label>}
				<SliderPrimitive.Root
					ref={ref}
					className={cn(
						'relative flex cursor-pointer w-full touch-none select-none items-center',
						className
					)}
					min={min}
					max={max}
					step={step}
					value={[value]} // Radix Slider expects an array of values
					onValueChange={handleValueChange}
					{...props}
				>
					<SliderPrimitive.Track className="relative h-6 w-full grow overflow-hidden rounded-full ">
						<div className="bg-primary/20 h-1 mt-[10px] rounded-full">
							<SliderPrimitive.Range className="absolute h-1 rounded-full bg-primary" />
						</div>
					</SliderPrimitive.Track>

					<SliderPrimitive.Thumb className="block h-5 w-5 focus:outline-none rounded-full bg-dark shadow hover:shadow-[0_0_0_10px] transition-all hover:shadow-dark/20 focus:shadow-[0_0_0_10px] focus:shadow-dark/20 ">
						{value && value !== max ? (
							<div className="bg-dark/60  absolute rounded-sm -top-8 -left-1 text-xs text-light w-7 p-1 text-center">
								{value}
							</div>
						) : null}
					</SliderPrimitive.Thumb>
				</SliderPrimitive.Root>
			</div>
		);
	}
);
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };
