# Charm Documentation

**Unofficial documentation site for Charmbracelet projects**

This project provides documentation for the Charm Bracelet ecosystem of terminal user interface tools and libraries.

## Coverage

Documentation includes:

- **[Bubble Tea](https://github.com/charmbracelet/bubbletea)** - TUI framework for Go
- **[Lip Gloss](https://github.com/charmbracelet/lipgloss)** - Terminal styling library
- **[Bubbles](https://github.com/charmbracelet/bubbles)** - Reusable Bubble Tea components

## Technical Stack

- **[TypeScript](https://www.typescriptlang.org/)** - Static typing for JavaScript
- **[React 19](https://react.dev/)** - Component-based UI library
- **[Next.js 15](https://nextjs.org/)** - React production framework
- **[Fumadocs](https://fumadocs.vercel.app/)** - Documentation site generator
- **[Bun](https://bun.sh/)** - JavaScript runtime and package manager
- **[MDX](https://mdxjs.com/)** - Markdown with embedded React components

## Development Setup

```bash
git clone https://github.com/N1xev/charmbracelet-docs.git
cd charmbracelet-docs
bun install
bun dev
```

Open `http://localhost:3000` to view the documentation.

## Project Structure

```
charmbracelet-docs/
├── app/                 # Next.js app directory
├── content/            # MDX documentation files
│   └── docs/          # Main documentation contain all of the ecosystem documentations
├── components/        # React components
├── lib/              # Utility functions
├── public/           # Static assets
└── styles/           # Global styles
```

## Contributing

Contributions are welcome. Focus areas include:

- Documentation improvements
- Bug fixes
- Feature additions
- UI/UX enhancements
- Translation work

### Workflow

1. Fork the repository
2. Create feature branch: `git checkout -b feature/description`
3. Commit changes: `git commit -m "type: description"`
4. Push branch: `git push origin feature/description`
5. Open pull request

### Content Standards

- Write clear, technical documentation
- Include working code examples
- Verify all code snippets before submission
- Follow existing documentation patterns

## Documentation Philosophy

This documentation aims to be comprehensive, technically accurate, and maintainable. Content should progress logically from basic concepts to advanced usage patterns.

## Development Roadmap

- Complete Bubble Tea API documentation
- Interactive code examples
- Community contribution guidelines
- Multi-language support
- Search implementation
- Performance optimization


## Acknowledgments

Thanks to the Charmbracelet team for building these tools and to all contributors who help maintain this documentation.

## Links

- [Report Issues](https://github.com/N1xev/charmbracelet-docs/issues)
- [Feature Requests](https://github.com/N1xev/charmbracelet-docs/issues)
- [Charmbracelet Organization](https://github.com/charmbracelet)