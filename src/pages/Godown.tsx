import GodownComp from "../components/GodownComp";
import godownData from '../data/godowns.json'

function Godown() {
	return (
		<div>
			<GodownComp parent={null} godownData={godownData}/>
		</div>
	)
}

export default Godown