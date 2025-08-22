import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { de } from "@nuxt/ui/runtime/locale/index.js";

export default defineContentConfig({
  collections: {
    user: defineCollection({
      type: "data",
      source: "user.json",
      schema: z.object({
        title: z.string(),
        role: z.string(),
        company: z.string(),
        companyUrl: z.string().url(),
        image: z.string().url(),
      }),
    }),
    home: defineCollection({
      type: "data",
      source: "home.json",
      schema: z.object({
        skills: z.array(
          z.object({
            label: z.string(),
            value: z.number(),
            max: z.number().optional(),
            to: z.string().url(),
          })
        ),
        technologies: z.array(z.string()).optional(),
        languages: z.array(
          z.object({
            label: z.string(),
            value: z.number(),
          })
        ),
        contact: z.array(
          z.object({
            icon: z.string(),
            to: z.string().url(),
          })
        ),
        about: z.string(),
        experience: z.array(
          z.object({
            company: z.string(),
            location: z.string(),
            link: z.string().url(),
            image: z.string().url(),
            format: z.string(),
            start: z.string(),
            end: z.string().nullable(),
            roles: z.array(
              z.object({
                title: z.string(),
                start: z.string(),
                end: z.string().nullable(),
                format: z.string(),
              })
            ),
          })
        ),
        education: z.array(
          z.object({
            institution: z.string(),
            degree: z.string(),
            link: z.string().url(),
            image: z.string().url(),
            start: z.string(),
            end: z.string().nullable(),
          })
        ),
        project: z.array(
          z.object({
            title: z.string(),
            link: z.string().url(),
            accountLink: z.string().url(),
            image: z.string().url(),
            start: z.string(),
            end: z.string().nullable(),
            info: z.string(),
            list: z.array(
              z.object({
                title: z.string(),
                technologies: z.string(),
                description: z.string(),
                to: z.string().url(),
              })
            ),
          })
        ),
        application: z.array(
          z.object({
            title: z.string(),
            image: z.string().url(),
            description: z.string(),
            url: z.string().url(),
            tag: z.string(),
          })
        ),
      }),
    }),
    cheatSheet: defineCollection({
      type: "data",
      source: "cheat-sheet/**.json",
      schema: z.object({
        title: z.string(),
        reference: z.string(),
        content: z.array(
          z.object({
            title: z.string(),
            reference: z.string(),
            content: z.array(
              z.object({
                command: z.string(),
                description: z.string(),
                syntax: z.string().optional(),
              })
            ),
          })
        ),
      }),
    }),
  },
});
