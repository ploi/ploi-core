module.exports = {
    future: {
        removeDeprecatedGapUtilities: true,
        purgeLayersByDefault: true,
    },

    purge: {
        content: [
            './resources/js/**/*.vue',
            './resources/views/**/*.blade.php',
        ],
        options: {
            whitelistPatternsChildren: [],
            whitelist: ['theme--dark'],
        }
    },
    plugins: [
        require('@tailwindcss/ui'),
    ],

    theme: {
        extend: {
            maxWidth: {
                'top-bar-container' : 'var(--top-bar-container)'
            },
            backgroundColor: {
                'top-bar' : 'var(--top-bar-background-color)',
                'tab-bar' : 'var(--tab-bar-background-color)',
                'tab-bar-item' : 'var(--tab-bar-item-active-background-color)',
            },
            height: {
                'top-bar-logo' : 'var(--top-bar-logo-height)'
            },
            textColor: {
                'breadcrumbs' : 'var(--breadcrumbs-text-color)',
                'top-bar' : 'var(--top-bar-text-color)',
                'tab-bar' : 'var(--tab-bar-item-text-color)',
                'tab-bar-active' : 'var(--tab-bar-item-active-text-color)',
            }
        },
        fontFamily: {
            'body': 'var(--font-body)',
        },
        fontSize: {
            heading: ['1.75rem', '2rem'],
            title: ['1.25rem', '1.75rem'],
            body: ['1rem', '1.5rem'],
            small: ['0.875rem', '1.5rem'],
            xs: '0.75rem',
        },
        textColor: {
            'low-emphasis': 'var(--color-text-low-emphasis)',
            'medium-emphasis': 'var(--color-text-medium-emphasis)',
            'high-emphasis': 'var(--color-text-high-emphasis)',

            'on-primary': 'var(--color-text-on-primary)',
            'on-success': 'var(--color-text-on-success)',
            'on-warning': 'var(--color-text-on-warning)',
            'on-danger': 'var(--color-text-on-danger)',

            'primary': 'var(--color-primary)',
            'success': 'var(--color-success)',
            'warning': 'var(--color-warning)',
            'danger': 'var(--color-danger)',
        },
        backgroundColor: {
            'transparent': 'transparent',
            'backdrop': 'var(--color-backdrop)',
            'overlay': 'var(--color-overlay)',

            'surface-1': 'var(--color-surface-1)',
            'surface-2': 'var(--color-surface-2)',
            'surface-3': 'var(--color-surface-3)',

            'primary': 'var(--color-primary)',
            'success': 'var(--color-success)',
            'warning': 'var(--color-warning)',
            'danger': 'var(--color-danger)',
        },
        borderColor: {
            'transparent': 'transparent',
            'low-emphasis': 'var(--color-border-low-emphasis)',
            'medium-emphasis': 'var(--color-border-medium-emphasis)',
            'high-emphasis': 'var(--color-border-high-emphasis)',

            'primary': 'var(--color-primary)',
            'success': 'var(--color-success)',
            'warning': 'var(--color-warning)',
            'danger': 'var(--color-danger)',
        },
        borderRadius: {
            default: 'var(--border-radius)',
            circle: 'var(--border-radius-circle)',
            avatar: 'var(--border-radius-avatar)',
        },
        transitionDuration: {
            fast: '200ms',
            slow: '600ms',
        },
    },
}
