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
      slots: {
        indicator: "duration-1000",
      },
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
      compoundVariants: [
        {
          disabled: false,
          active: false,
          variant: "pill",
          class: {
            link: [
              "hover:text-highlighted hover:before:bg-elevated/0",
              "transition-colors before:transition-colors",
            ],
            linkLeadingIcon: ["group-hover:text-default", "transition-colors"],
          },
        },
        {
          variant: "pill",
          active: true,
          highlight: false,
          class: {
            link: "before:bg-elevated/0",
          },
        },
        {
          orientation: "vertical",
          collapsed: false,
          class: {
            childList: "border-muted",
          },
        },
      ],
    },
    tooltip: {
      slots: {
        content: "bg-muted px-3 py-1.5",
      },
    },
    tabs: {
      slots: {
        root: "gap-0",
        list: "bg-elevated inset-shadow-md rounded-t-lg",
        indicator: "hidden",
        content: "border-s-4 border-primary"
      },
      variants: {
        variant: {
          link: {
            list: "border-none",
          },
        },
      },
      compoundVariants: [
        {
          color: "neutral",
          variant: "link",
          class: {
            trigger: "data-[state=active]:bg-muted",
          },
        },
      ],
    },
  },
});
