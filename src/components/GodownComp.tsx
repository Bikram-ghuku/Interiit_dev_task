import '../styles/GodownComp.css'
import folderIcon from '../assets/Folder-1.png'
import {useState} from 'react'
import chevronDown from '../assets/chevron-down.png'
import ItemComp from './ItemComp'
import { goDownType } from '../data/types'

const GodownComp = ({parent, godownData, search} : {parent : string | null, godownData: goDownType[], search: string}) => {
	const items = godownData.filter((ele) => ele.parent_godown == parent);
	const [isVisible, setVisible] = useState<boolean[]>(new Array(items.length).fill(false));
	const updtVis = (idx : number) => {
		const currr = [...isVisible];
		currr[idx] = !isVisible[idx];
		setVisible(currr);
	}

	if(items.length == 0){
		return(
			<div>
				<ItemComp godownId={parent!}/>
			</div>
		)
	}else{

		return (
			<div>
				{items.map((ele, idx) => (
					<div key={parent?.toString() + "_" + idx.toString()} className='godown-ele'>
						<div className="godown-ele-info" onClick={() => updtVis(idx)}>
							{isVisible[idx] && <img src={chevronDown} className='godown-ele-down'/>}
							{!isVisible[idx] && <img src={chevronDown} className='godown-ele-up'/>}
							<img src={folderIcon} className='godown-ele-pic'/>
							<span className='godown-ele-txt'>{ele.name}</span>
						</div>
						{isVisible[idx] && <GodownComp parent={ele.id} godownData={godownData} search={search}/>}
					</div>
				))}
			</div>
		)
	}
}

export default GodownComp