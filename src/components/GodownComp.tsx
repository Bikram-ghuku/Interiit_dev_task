import godownData from '../data/godowns.json'
import '../styles/GodownComp.css'
import folderIcon from '../assets/Folder-1.png'

const GodownComp = ({parent} : {parent : string | null}) => {
	const items = godownData.filter((ele) => ele.parent_godown == parent)
	return (
		<div>
			{items.map((ele, idx) => (
				<div key={parent?.toString() + "_" + idx.toString()} className='godown-ele'>
					<img src={folderIcon} className='godown-ele-pic'/>
					<span>{ele.name}</span>
					<GodownComp parent={ele.id} />
				</div>
			))}
		</div>
	)
}

export default GodownComp