import itemData from '../data/items.json'
import '../styles/ItemView.css'

function ItemView({itemId, onClose, shown}:{itemId:string, onClose: () => void, shown:boolean}) {
    const item = itemData.find((ele) => ele.item_id == itemId);
    const atri = Object.keys(item!.attributes)

    if (!item) {
        return <div>Item not found</div>;
    }

    return (
        <div className="modal-overlay" style={shown ? {display: "flex"} : {display: "none"}}>
            <div className="modal-main" hidden={!shown}>
                <button className="modal-close" onClick={onClose}>X</button>
                <h2>Item details</h2>
                <div className="modal-details">
                    <div className="modal-left">
                        <img src={item?.image_url} className='modal-img' />
                    </div>
                    <div className="modal-right">
                        <div className="modal-name">Name: {item.name}</div>
                        <div className="modal-qty">Quantity: {item.quantity}</div>
                        <div className="modal-cat">Category: {item.category}</div>
                        <div className="modal-price">Price: ${item.price}</div>
                        {item.status == "out_of_stock" ? <div className='modal-status-oos'>Out of Stock</div> : <div className='modal-status-is'>In stock</div>}
                        <div className="modal-brand">Brand: {item.brand}</div>
                        <div className="modal-atri">
                            {atri.map((key, idx) => (
                                <div key={idx} className="attribute">
                                    <strong>{key.replace("_", " ")}: </strong>{String(item.attributes[key as keyof typeof item.attributes])}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemView