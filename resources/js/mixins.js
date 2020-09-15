module.exports = {
    methods: {
        /**
         * Translate the given key.
         */
        __(key, replace) {
            let translation = this.$page.translations[key] ? this.$page.translations[key] : key;

            _forEach(replace, (value, key) => {
                translation = translation.replace(':' + key, value);
            });

            return translation;
        },

        __choice(key, total) {
            let translation = this.$page.translations[key] ? this.$page.translations[key] : key;

            let splitted = translation.split('|');

            if (total > 1 || total === 0) {
                return splitted[1];
            }

            return splitted[0];
        },
    }
};
