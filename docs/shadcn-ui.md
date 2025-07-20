# Shadcn/ui Component Library

This document covers the setup and usage of Shadcn/ui components in the Next.js project.

## What is Shadcn/ui?

Shadcn/ui is a collection of copy-and-paste components built using Radix UI and Tailwind CSS. It provides beautifully designed, accessible, and customizable components that you can copy and paste into your apps.

### Key Features

- **Copy & Paste**: Components are copied into your project, not installed as dependencies
- **Customizable**: Built with Tailwind CSS, fully customizable
- **Accessible**: Built on top of Radix UI primitives
- **TypeScript**: Full TypeScript support
- **Modern**: Uses the latest React patterns and best practices

## Installation & Setup

### Initial Setup

The project is already configured with Shadcn/ui. The initial setup was done with:

```bash
pnpm dlx shadcn@latest init
```

This created the necessary configuration files and folder structure.

### Configuration Files

- `components.json` - Shadcn/ui configuration
- `lib/utils.ts` - Utility functions (including `cn` helper)
- `components/ui/` - Directory for UI components

## Adding Components

### Basic Usage

To add new Shadcn/ui components to the project:

```bash
# Add a single component
pnpm dlx shadcn@latest add button

# Add multiple components
pnpm dlx shadcn@latest add button card dialog

# Add all components (not recommended)
pnpm dlx shadcn@latest add --all
```

### Example: Adding a Button Component

```bash
pnpm dlx shadcn@latest add button
```

This will:
1. Download the button component code
2. Place it in `components/ui/button.tsx`
3. Install any required dependencies
4. Update imports and utilities as needed

### Example Usage in Components

```tsx
import { Button } from '@/components/ui/button'

export function MyComponent() {
  return (
    <div>
      <Button variant="default">Click me</Button>
      <Button variant="destructive">Delete</Button>
      <Button variant="outline">Cancel</Button>
    </div>
  )
}
```

## Available Components

### Form Components
```bash
pnpm dlx shadcn@latest add button
pnpm dlx shadcn@latest add input
pnpm dlx shadcn@latest add textarea
pnpm dlx shadcn@latest add checkbox
pnpm dlx shadcn@latest add radio-group
pnpm dlx shadcn@latest add switch
pnpm dlx shadcn@latest add slider
```

### Layout Components
```bash
pnpm dlx shadcn@latest add card
pnpm dlx shadcn@latest add separator
pnpm dlx shadcn@latest add tabs
pnpm dlx shadcn@latest add accordion
pnpm dlx shadcn@latest add collapsible
```

### Navigation Components
```bash
pnpm dlx shadcn@latest add navigation-menu
pnpm dlx shadcn@latest add breadcrumb
pnpm dlx shadcn@latest add pagination
```

### Feedback Components
```bash
pnpm dlx shadcn@latest add alert
pnpm dlx shadcn@latest add toast
pnpm dlx shadcn@latest add progress
pnpm dlx shadcn@latest add skeleton
```

### Overlay Components
```bash
pnpm dlx shadcn@latest add dialog
pnpm dlx shadcn@latest add sheet
pnpm dlx shadcn@latest add popover
pnpm dlx shadcn@latest add tooltip
pnpm dlx shadcn@latest add dropdown-menu
```

### Data Display
```bash
pnpm dlx shadcn@latest add table
pnpm dlx shadcn@latest add badge
pnpm dlx shadcn@latest add avatar
pnpm dlx shadcn@latest add calendar
```

## Recommended Component Suggestions

For most Next.js projects, consider adding these commonly used components:

### Essential UI Components
```bash
# Basic interactive elements
pnpm dlx shadcn@latest add button input card

# User interface essentials
pnpm dlx shadcn@latest add avatar badge scroll-area

# Dialogs and overlays
pnpm dlx shadcn@latest add dialog sheet toast

# Form components
pnpm dlx shadcn@latest add form label textarea checkbox
```

### Advanced Components
```bash
# Data display and interaction
pnpm dlx shadcn@latest add table select dropdown-menu
pnpm dlx shadcn@latest add calendar date-picker

# Layout and navigation
pnpm dlx shadcn@latest add separator tabs navigation-menu
pnpm dlx shadcn@latest add aspect-ratio accordion

# Feedback and controls
pnpm dlx shadcn@latest add progress slider toggle switch
pnpm dlx shadcn@latest add tooltip popover alert
```

## Customization

### Theme Configuration

Shadcn/ui uses CSS variables for theming. Customize colors in `app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --primary: 222.2 47.4% 11.2%;
    --primary-foreground: 210 40% 98%;
    /* ... more variables */
  }
}
```

### Component Variants

Most components support multiple variants:

```tsx
// Button variants
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Button sizes
<Button size="default">Default</Button>
<Button size="sm">Small</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>
```

### Creating Custom Variants

Extend component variants using `class-variance-authority`:

```tsx
import { cn } from '@/lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-md text-sm font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        custom: 'bg-gradient-to-r from-purple-500 to-pink-500 text-white',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
)
```

## Best Practices

### 1. Component Organization
```
components/
├── ui/           # Shadcn/ui components
├── forms/        # Custom form components
├── layout/       # Layout components
└── features/     # Feature-specific components
```

### 2. Import Patterns
```tsx
// Use absolute imports with @ alias
import { Button } from '@/components/ui/button'
import { UserProfile } from '@/components/features/user-profile'
```

### 3. Composition over Customization
```tsx
// Good: Compose components
function MessageInput() {
  return (
    <div className="flex gap-2">
      <Input placeholder="Enter your message..." />
      <Button>Submit</Button>
    </div>
  )
}

// Better: Create reusable composed components
function MessageInput({ onSend, disabled }) {
  return (
    <form onSubmit={onSend} className="flex gap-2">
      <Input 
        placeholder="Type a message..." 
        disabled={disabled}
      />
      <Button type="submit" disabled={disabled}>
        Send
      </Button>
    </form>
  )
}
```

### 4. Accessibility
Shadcn/ui components are built with accessibility in mind, but always test:

```tsx
// Use semantic HTML and ARIA labels
<Button 
  aria-label="Save changes"
  disabled={!isValid}
>
  <SaveIcon />
</Button>
```

## Practical Integration Examples

### Example: User Dashboard Card

```tsx
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function UserDashboard({ user, isOnline, notifications }) {
  return (
    <Card className="p-4">
      <CardHeader>
        <div className="flex items-center gap-3">
          <Avatar>
            <AvatarImage src={user.avatar} />
            <AvatarFallback>{user.initials}</AvatarFallback>
          </Avatar>
          <div>
            <CardTitle>{user.name}</CardTitle>
            <Badge variant={isOnline ? "default" : "secondary"}>
              {isOnline ? "Online" : "Offline"}
            </Badge>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <div className="flex gap-2">
          <Button variant="default">
            View Profile
          </Button>
          <Button variant="outline">
            Settings
          </Button>
          {notifications > 0 && (
            <Button variant="secondary">
              Notifications ({notifications})
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
```

## Useful Commands

```bash
# List all available components
pnpm dlx shadcn@latest add

# Update Shadcn/ui CLI
pnpm dlx shadcn@latest@latest

# Check component dependencies
pnpm dlx shadcn@latest diff

# Get help
pnpm dlx shadcn@latest --help
```

## Resources

- **[Shadcn/ui Documentation](https://ui.shadcn.com/)** - Official documentation
- **[Component Examples](https://ui.shadcn.com/examples)** - Pre-built page examples
- **[Radix UI Documentation](https://www.radix-ui.com/)** - Underlying primitive components
- **[Class Variance Authority](https://cva.style/)** - Variant management utility
- **[Tailwind CSS](https://tailwindcss.com/)** - Styling framework

## Troubleshooting

### Common Issues

1. **Import Errors**: Ensure the `@` alias is configured in `tsconfig.json`
2. **Styling Issues**: Check Tailwind CSS configuration
3. **TypeScript Errors**: Update component types after adding new components
4. **Missing Dependencies**: Run `pnpm install` after adding components

### Component Not Working?

1. Check if the component was properly installed
2. Verify imports are correct
3. Ensure all dependencies are installed
4. Check for TypeScript errors
5. Validate Tailwind classes are available 