# Security Policy

## Supported Versions

LiveForge is currently maintained as a browser-based open-source project.

Security updates are applied to the latest version available on the `main` branch.

| Version | Supported |
|---|---|
| Latest `main` branch | Yes |
| Older revisions | No |

## Reporting a Vulnerability

Please do not publicly disclose a suspected security vulnerability before it has been reviewed.

If you discover a potential vulnerability:

1. Open the repository's **Security** tab.
2. Use GitHub's private vulnerability reporting feature if it is available.
3. Provide a clear description of the issue.
4. Include steps to reproduce the vulnerability.
5. Explain the potential impact.
6. Include screenshots or proof-of-concept details when appropriate.

Repository:

`https://github.com/Anu261105/realtime-html-css-javascript-editor`

## What to Include in a Report

A useful security report should contain:

- Affected component
- Vulnerability description
- Reproduction steps
- Expected behavior
- Actual behavior
- Potential impact
- Browser and operating system
- Suggested mitigation, if known

## Security Considerations

LiveForge executes user-provided HTML, CSS and JavaScript inside a browser preview environment.

The project uses a sandboxed iframe to help separate previewed code from the main editor interface. Contributors should carefully review changes involving:

- iframe sandbox permissions
- `srcdoc` rendering
- `postMessage` communication
- new-tab preview behavior
- user-generated JavaScript execution
- browser storage
- external dependencies
- dynamic HTML injection

## Responsible Disclosure

Please allow reasonable time for a reported vulnerability to be investigated and addressed before public disclosure.

Thank you for helping keep LiveForge and its users safe.