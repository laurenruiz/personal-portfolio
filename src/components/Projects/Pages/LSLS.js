import ProjectDetail from '../ProjectDetail'
import GooglePic from '../../../assets/images/LSLS.JPG'

const LSLS = () => (
    <ProjectDetail strArray={['Latinx', 'Student', 'Leadership', 'Summit']} idx={17} timeout={7000}>
        <p>
            I had the most amazing and insightful experience at Google's Latinx Student Leadership Summit 2024! I am beyond
            honored to have been able to attend!
        </p>
        <div className='picture'>
            <img className="images" src={GooglePic} alt="connect violet pic" />
        </div>
    </ProjectDetail>
)

export default LSLS
