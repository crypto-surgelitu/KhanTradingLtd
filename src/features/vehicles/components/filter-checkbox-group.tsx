// DESIGN.md Section 4 filter controls: checkbox lists with the group label as
// an eyebrow. Used for Transmission, Fuel Type and Showroom Status on the
// Vehicles screen. 44px tap rows on mobile (Section 10).

type FilterCheckboxGroupProps = {
  legend: string;
  name: string;
  options: ReadonlyArray<{ value: string; label: string }>;
  selected: readonly string[];
};

export function FilterCheckboxGroup({
  legend,
  name,
  options,
  selected,
}: FilterCheckboxGroupProps) {
  return (
    <fieldset className="flex flex-col gap-3 pt-4">
      <legend className="font-body text-eyebrow uppercase text-slate">
        {legend}
      </legend>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <label
            key={option.value}
            className="flex min-h-11 cursor-pointer select-none items-center gap-2 font-body text-small text-ink sm:min-h-fit"
          >
            <input
              type="checkbox"
              name={name}
              value={option.value}
              defaultChecked={selected.includes(option.value)}
              className="size-4 rounded border-stone accent-ink"
            />
            <span>{option.label}</span>
          </label>
        ))}
      </div>
    </fieldset>
  );
}
