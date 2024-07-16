const Students = (props) => {

    const list = ["Siva", "Sridhar", "Sanjay", "Santhosh", "Nataraj"]

    const item = props.item
    const setitem = props.setitem

    const addToFavorites = (index) => {
        setitem([...item, list[index]])
    };

    return (
        <div className="p-5">
            <ol className="flex flex-col gap-3">
                {list.map((student, index) => (
                    <li key={index} className="flex flex-row gap-3 text-xl">
                        {index+1}.{student}{" "}
                        {!item.includes(student) && (
                            <button onClick={() => addToFavorites(index)} className="bg-blue-500 p-2">
                                Add Favourite
                            </button>
                        )}
                        {item.includes(student) && (
                            <span className="bg-blue-500 p-2">Added</span>
                        )}
                    </li>
                ))}
            </ol>
        </div>
    );
};

export default Students