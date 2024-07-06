// src/components/multi-select.tsx

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import {
  CheckIcon,
  XCircle,
  ChevronDown,
  XIcon,
  // WandSparkles,
} from "lucide-react";

import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";
import Image from "next/image";
import debounceFn from "@/core/utils/debounceFn";

const multiSelectVariants = cva(
  "m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
  {
    variants: {
      variant: {
        default:
          "border-foreground/10 text-foreground bg-card hover:bg-card/80",
        secondary:
          "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        inverted: "inverted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

interface MultiSelectProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof multiSelectVariants> {
  options: any[];
  onChange: any;
  defaultValue: string[];
  placeholder?: string;
  pathValue?: string;
  pathLabel?: string;
  error?: string;
  animation?: number;
  maxCount?: number;
  asChild?: boolean;
  className?: string;
  icon?: any;
}

export const MultiSelect = React.forwardRef<
  HTMLButtonElement,
  MultiSelectProps
>(
  (
    {
      options,
      onChange,
      variant,
      defaultValue = [],
      placeholder = "Select options",
      pathValue = "value",
      pathLabel = "label",
      animation = 0,
      maxCount = 3,
      asChild = false,
      className,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] =
      React.useState<string[]>(defaultValue);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const [isAnimating, setIsAnimating] = React.useState(false);
    const [widthChild, setWidthChild] = React.useState(700);
    const refWrap = React.useRef<any>();
    // React.useEffect(() => {
    //     if (JSON.stringify(selectedValues) !== JSON.stringify(defaultValue)) {
    //         setSelectedValues(defaultValue);
    //     }
    // }, [defaultValue, selectedValues]);

    const handleInputKeyDown = (
      event: React.KeyboardEvent<HTMLInputElement>
    ) => {
      if (event.key === "Enter") {
        setIsPopoverOpen(true);
      } else if (event.key === "Backspace" && !event.currentTarget.value) {
        const newSelectedValues = [...selectedValues];
        newSelectedValues.pop();
        setSelectedValues(newSelectedValues);
        onChange(newSelectedValues);
      }
    };

    const toggleOption = (value: string) => {
      const newSelectedValues = selectedValues.includes(value)
        ? selectedValues.filter((v) => v !== value)
        : [...selectedValues, value];
      setSelectedValues(newSelectedValues);
      onChange(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
      onChange([]);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
      onChange(newSelectedValues);
    };

    const toggleAll = () => {
      if (selectedValues.length === options.length) {
        handleClear();
      } else {
        const allValues = options.map((option) => option[pathValue]);
        setSelectedValues(allValues);
        onChange(allValues);
      }
    };
    const updateWidth = () => {
      if (refWrap.current) {
        setWidthChild(refWrap.current.offsetWidth);
      }
    };
    const debouncedUpdateWidth = debounceFn(updateWidth, 200);
    React.useEffect(() => {
      setWidthChild(refWrap.current.offsetWidth);
    }, []);

    React.useEffect(() => {
      window.addEventListener("resize", debouncedUpdateWidth);
      return () => window.removeEventListener("resize", debouncedUpdateWidth);
    }, [debouncedUpdateWidth]);

    return (
      <div className="w-full max-w-full" ref={refWrap}>
        <Popover open={isPopoverOpen} onOpenChange={setIsPopoverOpen}>
          <PopoverTrigger asChild>
            <div
              onClick={handleTogglePopover}
              className={cn(
                "relative w-full cursor-pointer rounded-sm border bg-white flex items-center justify-center common-input-select !pr-0 h-auto text-[13px]",
                {
                  'input-focus': isPopoverOpen,
                  'common-input-default ': !isPopoverOpen,
                }
              )}
            >
              <div className="absolute left-[28px] max-w-[16px] max-h-[16px] top-1/2 -translate-y-1/2 z-20">
                <Image src={props.icon} alt="" />
              </div>
              {selectedValues.length > 0 ? (
                <div className="flex justify-between items-center w-full">
                  <div className="flex flex-wrap items-center gap-1">
                    {selectedValues.slice(0, maxCount).map((value) => {
                      const option = options.find(
                        (o) => o[pathValue] === value
                      );
                      const IconComponent = option?.icon;
                      return (
                        <Badge
                          key={value}
                          className={cn(
                            "p-1 px-2 font-poppins font-medium text-[13px]",
                            isAnimating ? "animate-bounce" : "",
                            multiSelectVariants({ variant, className })
                          )}
                          variant="default"
                          style={{ animationDuration: `${animation}s` }}
                        >
                          {IconComponent && (
                            <IconComponent className="h-4 w-4 mr-2" />
                          )}
                          {option[pathLabel]}
                          <XCircle
                            className="ml-2 h-4 w-4 cursor-pointer"
                            onClick={(event) => {
                              event.stopPropagation();
                              toggleOption(value);
                            }}
                          />
                        </Badge>
                      );
                    })}
                    {selectedValues.length > maxCount && (
                      <Badge
                        className={cn(
                          "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                          isAnimating ? "animate-bounce" : "",
                          multiSelectVariants({ variant, className })
                        )}
                        style={{ animationDuration: `${animation}s` }}
                      >
                        {`+ ${selectedValues.length - maxCount} more`}
                        <XCircle
                          className="ml-2 h-4 w-4 cursor-pointer"
                          onClick={(event) => {
                            event.stopPropagation();
                            clearExtraOptions();
                          }}
                        />
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center justify-between">
                    <XIcon
                      className="h-4 mx-2 cursor-pointer text-muted-foreground"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleClear();
                      }}
                    />
                    <Separator
                      orientation="vertical"
                      className="flex min-h-6 h-full"
                    />
                    <ChevronDown width={20} height={20} className="text-[#0755d1] mx-2 cursor-pointer text-muted-foreground" />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full mx-auto">
                  <span className="text-[13px] text-[#0755d1] font-medium uppercase tracking-[1.2px] ">
                    {`-- ${placeholder} --`}
                  </span>
                  <ChevronDown width={20} height={20} className="text-[#0755d1] cursor-pointer text-muted-foreground mx-2" />
                </div>
              )}
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={`p-0`}
            width={widthChild}
            align="start"
            onEscapeKeyDown={() => setIsPopoverOpen(false)}
          >
            <Command>
              <CommandInput
                placeholder="Tìm kiếm..."
                onKeyDown={handleInputKeyDown}
              />
              <CommandList>
                <CommandEmpty>Không tìm thấy.</CommandEmpty>
                <CommandGroup>
                  <CommandItem
                    key="all"
                    onSelect={toggleAll}
                    style={{ pointerEvents: "auto", opacity: 1 }}
                    className="cursor-pointer"
                  >
                    <div
                      className={cn(
                        "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                        selectedValues.length === options.length
                          ? "bg-primary text-primary-foreground"
                          : "opacity-50 [&_svg]:invisible"
                      )}
                    >
                      <CheckIcon className="h-4 w-4" />
                    </div>
                    <span>(Chọn tất cả)</span>
                  </CommandItem>
                  {options.map((option) => {
                    const isSelected = selectedValues.includes(
                      option[pathValue]
                    );
                    return (
                      <CommandItem
                        key={option[pathValue]}
                        onSelect={() => toggleOption(option[pathValue])}
                        style={{ pointerEvents: "auto", opacity: 1 }}
                        className={cn("cursor-pointer", {
                          "bg-select-multi": isSelected,
                        })}
                      >
                        <div
                          className={cn(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            isSelected
                              ? "text-primary"
                              : "opacity-50 [&_svg]:invisible"
                          )}
                        >
                          <CheckIcon className="h-4 w-4" />
                        </div>
                        {option.icon && (
                          <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="tracking-[1.2px] text-[#1D2024]">{option[pathLabel]}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
                <CommandSeparator />
                <CommandGroup>
                  <div className="flex items-center justify-between">
                    {selectedValues.length > 0 && (
                      <>
                        <CommandItem
                          onSelect={handleClear}
                          style={{ pointerEvents: "auto", opacity: 1 }}
                          className="flex-1 justify-center cursor-pointer"
                        >
                          Bỏ chọn
                        </CommandItem>
                        <Separator
                          orientation="vertical"
                          className="flex min-h-6 h-full"
                        />
                      </>
                    )}
                    <CommandSeparator />
                    <CommandItem
                      onSelect={() => setIsPopoverOpen(false)}
                      style={{ pointerEvents: "auto", opacity: 1 }}
                      className="flex-1 justify-center cursor-pointer"
                    >
                      Đóng
                    </CommandItem>
                  </div>
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
          {/* {animation > 0 && selectedValues.length > 0 && (
                        <WandSparkles
                            className={cn(
                                "cursor-pointer my-2 text-foreground bg-background w-3 h-3",
                                isAnimating ? "" : "text-muted-foreground"
                            )}
                            onClick={() => setIsAnimating(!isAnimating)}
                        />
                    )} */}
        </Popover>
        {props.error && <p className="form-error">{props.error}</p>}
      </div>
    );
  }
);

MultiSelect.displayName = "MultiSelect";
