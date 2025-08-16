export default defineAppConfig({
  ui: {
    colors: {
      primary: "blue",
      neutral: "zinc",
    },
    separator: {
      variants: {
        color: {
          neutral: {
            border: "border-accented",
          },
        },
      },
      defaultVariants: {
        color: "neutral",
        size: "md",
        type: "solid",
      },
    },
    progress: {
      defaultVariants: {
        animation: "carousel",
        color: "primary",
        size: "sm",
      },
    },
    stepper: {
      slots: {
        trigger: "group-data-[state=active]:text-default",
      },
      variants: {
        color: {
          neutral: {
            trigger:
              "group-data-[state=active]:text-elevated group-data-[state=active]:bg-inverted/0",
          },
        },
      },
    },
    navigationMenu: {
      slots: {
        linkLabel: "hidden sm:block truncate md:text-xl",
        linkLeadingIcon: "shrink-0 size-8",
        link: "flex-col gap-1 md:gap-2 md:flex-row",
      },
    },
  },
});
