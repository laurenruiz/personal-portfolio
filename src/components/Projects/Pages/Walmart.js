import ProjectDetail from '../ProjectDetail'
import WalmartPic from '../../../assets/images/Walmart.jpg'

const Walmart = () => (
    <ProjectDetail strArray={['Walmart', 'Sophomore', 'Summit']} idx={17} timeout={6000}>
        <p>
            I had the most amazing and insightful experience at Walmart and Sam's Club Sophomore Summit 2024! I am beyond
            honored to have been able to attend!
        </p>
        <div className='picture'>
            <img className="images" src={WalmartPic} alt="walmart pic" />
        </div>
    </ProjectDetail>
)

export default Walmart
