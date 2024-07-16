const Favourites = (props) => {

    const item = props.item
    const setitem = props.setitem

    const Remove = (index) => {

        const newItems = item.filter((item, i) => i !== index);
        setitem(newItems);
    }

    return (
        <div className="p-5">
            <ol className="flex flex-col gap-3">
                {item.map((item, index) => (
                    <li key={index} className="flex flex-row gap-3 text-xl">
                        {index+1}.{item}
                        {item.includes(item) && (
                            <button onClick={() => { Remove(index) }} className="bg-blue-500 p-2">Remove</button>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    )
}

export default Favourites