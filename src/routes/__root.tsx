import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Digital Elite Lab — Devenez une élite du digital" },
      { name: "description", content: "Agence digitale au Togo : graphisme, développement, IA, topographie, maintenance, sérigraphie. Formez-vous, digitalisez votre activité, exploitez l'IA." },
      { name: "author", content: "Digital Elite Lab" },
      { property: "og:title", content: "Digital Elite Lab — Devenez une élite du digital" },
      { property: "og:description", content: "Agence digitale au Togo : graphisme, développement, IA, topographie, maintenance, sérigraphie. Formez-vous, digitalisez votre activité, exploitez l'IA." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Digital Elite Lab — Devenez une élite du digital" },
      { name: "twitter:description", content: "Agence digitale au Togo : graphisme, développement, IA, topographie, maintenance, sérigraphie. Formez-vous, digitalisez votre activité, exploitez l'IA." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bfe01f8e-ba4d-4f5e-b102-d5e2b78bf7c0/id-preview-7d20374b--0ad4ea5d-9b57-4088-bfcf-772b176298c8.lovable.app-1777096745040.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/bfe01f8e-ba4d-4f5e-b102-d5e2b78bf7c0/id-preview-7d20374b--0ad4ea5d-9b57-4088-bfcf-772b176298c8.lovable.app-1777096745040.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,700;9..144,900&family=Space+Grotesk:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
