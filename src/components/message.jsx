export default function Message({

    message

}) {

    if (!message) {

        return null;

    }

    return (

        <div
        className="
        fixed
        top-4
        left-1/2
        -translate-x-1/2
        bg-yellow-400
        text-black
        font-bold
        px-6
        py-3
        rounded-xl
        shadow-xl
        z-50
        "
        >

            {message}

        </div>

    );

}