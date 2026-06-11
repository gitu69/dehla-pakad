export const trumpVariants = {

    hidden: {

        opacity: 0,
        y: 12,
        scale: 0.96

    },

    visible: {

        opacity: 1,
        y: 0,
        scale: 1,

        transition: {

            duration: 0.25

        }

    },

    exit: {

        opacity: 0,
        y: -12,

        transition: {

            duration: 0.25

        }

    }

};