module.exports = {
    methods: {
        /**
         * Translate the given key.
         */
        __(key, replace) {
            let translation = this.$page.props.translations[key] ? this.$page.props.translations[key] : key;

            _forEach(replace, (value, key) => {
                translation = translation.replace(':' + key, value);
            });

            return translation;
        },

        __choice(key, total) {
            let translation = this.$page.props.translations[key] ? this.$page.props.translations[key] : key;

            let splitted = translation.split('|');

            if (total > 1 || total === 0) {
                return splitted[1];
            }

            return splitted[0];
        },

        randomString() {
            let m = m || 20;
            let s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            for (let i = 0; i < m; i++) {
                s += r.charAt(Math.floor(Math.random() * r.length));
            }
            return s;
        },

        can(subject, permission) {
            return this.$page.props.auth.can[subject] ? this.$page.props.auth.can[subject][permission] : false;
        }
    }
};
