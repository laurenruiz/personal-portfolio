import ProjectDetail from '../ProjectDetail'
import LatitudePic from '../../../assets/images/Latitude.jpg'

const Latitude = () => (
    <ProjectDetail strArray={['D.E.', "Shaw's", 'Latitude', 'Fellowship']} idx={17} timeout={7500}>
        <p>
            I had the most amazing and insightful experience at the D.E. Shaw Group's Latitude Fellowship 2024!
            I am beyond honored to have been able to attend!
        </p>
        <div className='picture'>
            <img className="images" src={LatitudePic} alt="latitude pic" />
        </div>
    </ProjectDetail>
)

export default Latitude
