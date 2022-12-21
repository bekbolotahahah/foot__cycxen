import React,  {useEffect, useState} from 'react'
import cls from './Home.module.scss'
import {AiFillStar} from "react-icons/ai";
import {requests} from "../../config/index"
import {IPartners, IProject, IRequestForm, IReview, IService, ITeam} from "../../models/main.page.model"
import {ReactComponent as WorldMap} from "../../assets/images/map_allone 1.svg";
import Loader from "../../components/Loader"
import Header from "../../components/Header";
import {useForm} from "react-hook-form";
import Footer from "../../components/Footer";


const Home = () => {
  const [projectsData, setProjectsData] = useState<IProject[] | null>(null)
  const [reviewsData, setReviewsData] = useState<IReview[] | null>(null)
  const [servicesData, setServicesData] = useState<IService[] | null>(null)
  const [teamData, setTeamData] = useState<ITeam[] | null>(null)
  const [partnersData, setPartnersData] = useState<IPartners[] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {isValid, errors},
    reset,
  } = useForm<IRequestForm>({
    mode: 'onChange'
  })

  useEffect(() => {
    requests.getProjects().then(res => {
      setProjectsData(res.data)
    })

    requests.getReviews().then(res => {
      setReviewsData(res.data)
    })

    requests.getPartners().then(res => {
      setPartnersData(res.data)
    })

    requests.getServices().then(res => {
      setServicesData(res.data)
    })

    requests.getTeam().then(res => {
      setTeamData(res.data)
    })
  }, [])


  if (!reviewsData
    || !projectsData
    || !servicesData
    || !teamData
  ) return <div className={cls.loading}><Loader/></div>
  return (
    <div className={cls.root}>
      <Header
        isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen}
        register={register}
        reset={reset}
        handleSubmit={handleSubmit}
        errors={errors}
        isValid={isValid}
      />
      <section className={cls.startScreen}>
        <img
          className={cls.background}
          src="https://images.prismic.io/superpupertest/b57cd112-8bdd-4e51-9ee3-0f91d638e143_about_us_.webp?auto=compress,format"
          alt="logo"
        />
        <div className={cls.about}>
          <h1>CRYXXEN</h1>
          <h4>Engineering Your Growth</h4>
          <p>
            We dedicate ourselves to bringing value
            to any project we work on
          </p>
          <button onClick={() => setIsModalOpen(true)}>Let's talk</button>
        </div>
      </section>

      <section className={cls.mission}>
        <div className={cls.about}>
          <h3>Our Mission</h3>
          <p>
            Our mission is to automate everything to facilitate the adoption of digital solutions and untangle issues
            that emerge during periods of rapid growth to ensure smooth scaling.
          </p>
        </div>
      </section>

      <section className={cls.projectsType}>
        <div className={cls.container}>
          <h4>We create IT projects for</h4>

          <ul className={cls.typeList}>
            {
              servicesData?.map(service => (
                <li key={service.id}>
                  <img src={service.icon} alt="icon"/>
                  <span>{service.title}</span>
                </li>

              ))
            }
          </ul>

          <div className={cls.separator}></div>

          <div className={cls.worldMap}>
            <WorldMap/>
          </div>
        </div>
      </section>

      <section className={cls.valuedCustomers}>
        <div className={cls.container}>
          <h4>Our portfolio</h4>
          <p>
            Due to our NDAs and confidentiality requirements, we cannot disclose details for all of our customers. These
            are a few of the companies we work with.
          </p>

          <ul className={cls.customersList}>
            {
              projectsData?.map(project => (
                <li
                  key={project.id}
                >
                  <img
                    src={project.image}
                    alt="icon"/>
                </li>
              ))
            }
          </ul>

          <button className={cls.studies}>
            See more
          </button>
        </div>
      </section>

      <section className={cls.reviews}>
        <div className={cls.container}>
          <h4>Our Reviews</h4>

          <div className={cls.reviewBox}>
            <div className={cls.reviewBoxHeading}>
              <h5>CRYXXEN Reviews</h5>
              <div className={cls.middleReview}>
                <span className={cls.totalReview}>{reviewsData[0].total_stars}</span>
                <ul className={cls.stars}>
                  {
                    Array.from({length: reviewsData[0].total_stars}).map((_, index) => (
                      <li key={index}><AiFillStar/></li>
                    ))
                  }
                </ul>
                <span className={cls.reviewCount}>{reviewsData?.length} reviews</span>
              </div>
            </div>
            <ul className={cls.reviewList}>
              {
                reviewsData?.map(review => (
                  <li
                    className={cls.reviewItem}
                    key={review.id}
                  >
                    <div className={cls.header}>
                      <div className={cls.stars}>
                        <span className={cls.grade}>{review.stars}.0</span>
                        <ul>
                          {
                            Array.from({length: review.stars}).map((_, index) => (
                              <li key={index}><AiFillStar/></li>
                            ))
                          }
                        </ul>
                      </div>
                      <p>
                        «{review.message}»
                      </p>
                    </div>
                    <div className={cls.footer}>
                      <span className={cls.position}>{review.first_name} {review.last_name}</span>
                    </div>
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
      </section>

      <section className={cls.partners}>
        <div className={cls.container}>
          <h4>Our partners</h4>

          <ul className={cls.partnersList}>
            {
              partnersData?.map(partner => (
                <li key={partner.id}>
                  <div className={cls.logo}>
                    <img src={partner.image} alt="partner"/>
                  </div>
                  <span>{partner.title}</span>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      <section className={cls.team}>
        <div className={cls.container}>
          <h3>Our team</h3>
          <ul className={cls.teamList}>
            {
              teamData?.map(person => (
                <li key={person.id}>
                  <div className={cls.avatar}>
                    <img src={person.image} alt="person"/>
                  </div>
                  <div className={cls.about}>
                    <h5>{person.first_name} {person.last_name}</h5>
                    <span>{person.position}</span>
                  </div>
                </li>
              ))
            }
          </ul>
        </div>
      </section>

      <Footer/>
    </div>
  )
}

export default Home

//TODO: similar paddings in titles
