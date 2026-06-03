export default function AISwitchButton({

    aiEnabled,

    setAiEnabled

}) {

    return (

        <button

            onClick={() =>

                setAiEnabled(

                    !aiEnabled

                )

            }

            className="
            bg-purple-600
            px-4
            py-2
            rounded
            ml-2
            "

        >

            {

                aiEnabled

                ? 'AI ON'

                : 'AI OFF'

            }

        </button>

    );

}