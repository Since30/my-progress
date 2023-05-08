export default function FormControl() {
    const [value, setValue] = useState("");
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");
    const [technos, setTechnos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(null);
    const [editValue, setEditValue] = useState("");
    const [editError, setEditError] = useState("");
    const [editSuccess, setEditSuccess] = useState("");
    const [editLoading, setEditLoading] = useState(false);
    const [deleteLoading, setDeleteLoading] = useState(false);
    const [deleteError, setDeleteError] = useState("");
    const [deleteSuccess, setDeleteSuccess] = useState("");
    const [deleteId, setDeleteId] = useState(null);
    const [deleteName, setDeleteName] = useState(null);
    const [deleteLoadingId, setDeleteLoadingId] = useState(null);
    const [deleteLoadingName, setDeleteLoadingName] = useState(null);
    const [deleteLoadingError, setDeleteLoadingError] = useState("");
    const [deleteLoadingSuccess, setDeleteLoadingSuccess] = useState("");
    const [deleteLoadingLoading, setDeleteLoadingLoading] = useState(false);
    const [deleteLoadingIdError, setDeleteLoadingIdError] = useState("");
    const [deleteLoadingIdSuccess, setDeleteLoadingIdSuccess] = useState("");
    const [deleteLoadingIdLoading, setDeleteLoadingIdLoading] = useState(false);
    const [deleteLoadingNameError, setDeleteLoadingNameError] = useState("");
    const [deleteLoadingNameSuccess, setDeleteLoadingNameSuccess] = useState("");
    const [deleteLoadingNameLoading, setDeleteLoadingNameLoading] = useState(false);
    const [deleteLoadingIdNameError, setDeleteLoadingIdNameError] = useState("");
    const [deleteLoadingIdNameSuccess, setDeleteLoadingIdNameSuccess] = useState("");
    const [deleteLoadingIdNameLoading, setDeleteLoadingIdNameLoading] = useState(false);
    const [deleteLoadingIdNameLoadingError, setDeleteLoadingIdNameLoadingError] = useState("");
    const [deleteLoadingIdNameLoadingSuccess, setDeleteLoadingIdNameLoadingSuccess] = useState("");
    const [deleteLoadingIdNameLoadingLoading, setDeleteLoadingIdNameLoadingLoading] = useState(false);
    const [deleteLoadingIdNameLoadingIdError, setDeleteLoadingIdNameLoadingIdError] = useState("");
    const [deleteLoadingIdNameLoadingIdSuccess, setDeleteLoadingIdNameLoadingIdSuccess] = useState("");
    const [deleteLoadingIdNameLoadingIdLoading, setDeleteLoadingIdNameLoadingIdLoading] = useState(false);
    const [deleteLoadingIdNameLoadingNameError, setDeleteLoadingIdNameLoadingNameError] = useState("");
    const [deleteLoadingIdNameLoadingNameSuccess, setDeleteLoadingIdNameLoadingNameSuccess] = useState("");
    const [deleteLoadingIdNameLoadingNameLoading, setDeleteLoadingIdNameLoadingNameLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (value === "") {
            setError("Please enter a value");
            setSuccess("");
        } else {
            setError("");
            setSuccess("Value submitted");
            setValue("");
        }
    }

    const handleEdit = (e) => {
        e.preventDefault();
        if (editValue === "") {
            setEditError("Please enter a value");
            setEditSuccess("");
        } else {
            setEditError("");
            setEditSuccess("Value submitted");
            setEditValue("");
        }
    }

    const handleDelete = (e) => {
        e.preventDefault();
        if (deleteId === null) {
            setDeleteError("Please enter an id");
            setDeleteSuccess("");
        } else {
            setDeleteError("");
            setDeleteSuccess("Value submitted");
            setDeleteId(null);
        }
    }

    const handleDeleteLoading = (e) => {
        e.preventDefault();
        if (deleteLoadingId === null) {
            setDeleteLoadingError("Please enter an id");
            setDeleteLoadingSuccess("");
        } else {
            setDeleteLoadingError("");
            setDeleteLoadingSuccess("Value submitted");
            setDeleteLoadingId(null);
        }
    }

    const handleDeleteLoadingId = (e) => {
        e.preventDefault();
        if (deleteLoadingId === null) {
            setDeleteLoadingIdError("Please enter an id");
            setDeleteLoadingIdSuccess("");
        } else {
            setDeleteLoadingIdError("");
            setDeleteLoadingIdSuccess("Value submitted");
            setDeleteLoadingId(null);
        }
    }

    const handleDeleteLoadingName = (e) => {
        e.preventDefault();
        if (deleteLoadingName === null) {
            setDeleteLoadingNameError("Please enter a name");
            setDeleteLoadingNameSuccess("");
        } else {
            setDeleteLoadingNameError("");
            setDeleteLoadingNameSuccess("Value submitted");
            setDeleteLoadingName(null);
        }
    }

    const handleDeleteLoadingIdName = (e) => {
        e.preventDefault();
        if (deleteLoadingIdName === null) {
            setDeleteLoadingIdNameError("Please enter an id and a name");
            setDeleteLoadingIdNameSuccess("");
        } else {
            setDeleteLoadingIdNameError("");
            setDeleteLoadingIdNameSuccess("Value submitted");
            setDeleteLoadingIdName(null);
        }
    }

    const handleDeleteLoadingIdNameLoading = (e) => {
        e.preventDefault();
        if (deleteLoadingIdNameLoadingId === null) {
            setDeleteLoadingIdNameLoadingIdError("Please enter an id");
            setDeleteLoadingIdNameLoadingIdSuccess("");
        } else {
            setDeleteLoadingIdNameLoadingIdError("");
            setDeleteLoadingIdNameLoadingIdSuccess("Value submitted");
            setDeleteLoadingIdNameLoadingId(null);
        }
    }

    const handleDeleteLoadingIdNameLoadingName = (e) => {
        e.preventDefault();
        if (deleteLoadingIdNameLoadingName === null) {
            setDeleteLoadingIdNameLoadingNameError("Please enter a name");
            setDeleteLoadingIdNameLoadingNameSuccess("");
        } else {
            setDeleteLoadingIdNameLoadingNameError("");
            setDeleteLoadingIdNameLoadingNameSuccess("Value submitted");
            setDeleteLoadingIdNameLoadingName(null);
        }
    }


    return (
        <div className="form-control">
            <form onSubmit={handleSubmit}>
                <label htmlFor="value">Value</label>
                <input type="text" name="value" id="value" value={value} onChange={(e) => setValue(e.target.value)} />
                <button type="submit">Submit</button>
                {error && <p className="error">{error}</p>} 
                {success && <p className="success">{success}</p>}
            </form>
            <form onSubmit={handleEdit}>
                <label htmlFor="editValue">Edit Value</label>
                <input type="text" name="editValue" id="editValue" value={editValue} onChange={(e) => setEditValue(e.target.value)} />
                <button type="submit">Submit</button>
                {editError && <p className="error">{editError}</p>}
                {editSuccess && <p className="success">{editSuccess}</p>}
            </form>

            <form onSubmit={handleDelete}>
                <label htmlFor="deleteId">Delete Id</label>
                <input type="number" name="deleteId" id="deleteId" value={deleteId} onChange={(e) => setDeleteId(e.target.value)} />
                <button type="submit">Submit</button>
                {deleteError && <p className="error">{deleteError}</p>}
                {deleteSuccess && <p className="success">{deleteSuccess}</p>}
            </form>

            <form onSubmit={handleDeleteLoading}>
                <label htmlFor="deleteLoadingId">Delete Loading Id</label>
                <input type="number" name="deleteLoadingId" id="deleteLoadingId" value={deleteLoadingId} onChange={(e) => setDeleteLoadingId(e.target.value)} />
                <button type="submit">Submit</button>
                {deleteLoadingError && <p className="error">{deleteLoadingError}</p>}
                {deleteLoadingSuccess && <p className="success">{deleteLoadingSuccess}</p>}
            </form>

            <form onSubmit={handleDeleteLoadingName}>
                <label htmlFor="deleteLoadingName">Delete Loading Name</label>
                <input type="text" name="deleteLoadingName" id="deleteLoadingName" value={deleteLoadingName} onChange={(e) => setDeleteLoadingName(e.target.value)} />
                <button type="submit">Submit</button>
                {deleteLoadingNameError && <p className="error">{deleteLoadingNameError}</p>}
                {deleteLoadingNameSuccess && <p className="success">{deleteLoadingNameSuccess}</p>}
            </form>