
import react, {useState, useEffect} from 'react'
import './Content.css'
import { FiSettings } from 'react-icons/fi';
import { RiChat1Line, RiChat3Line, RiFileSettingsLine, RiFolderSettingsFill, RiListSettingsLine, RiMailSettingsLine, RiSettingsLine, RiToolsLine, RiTwitterLine, RiUserSettingsLine} from 'react-icons/ri';
import {FaDribbble, FaInstagram, FaScaleUnbalancedFlip, FaWhatsapp} from 'react-icons/fa6'
import Card from '../components/CardTemplate/Card'
import {  MdOutlineAccountBalanceWallet } from 'react-icons/md';
import { IoCashOutline, IoSettingsOutline } from 'react-icons/io5';
import {TbArrowsExchange} from 'react-icons/tb'
import Analytics from '../components/AnalyticsTemplate/Analytics';
import img from '../images/trade.jpg'
import {
  AiOutlineEdit,
  AiOutlineUsergroupAdd,
  AiOutlineUserSwitch
} from "react-icons/ai";
import { GiSettingsKnobs } from "react-icons/gi";
import CircularProgress from '../components/CircularProgress/CircularProgress';



const Content = ()=>{
  const [value_i] = useState(Math.floor(Math.random() * 100));
  const [value_i_offset] = useState(315 - (value_i / 100) * 315);

  const [value_ii] = useState(Math.floor(Math.random() * 100));
  const [value_ii_offset] = useState(315 - (value_ii / 100) * 315);


  const [username, setusername] = useState("");

  useEffect(()=>{
   setusername(localStorage.getItem("username"));
  },[])

    return(
        <div className='content'>
            <div className="row header">
                <FiSettings className='cog'/>
                <h1 className="txt-head">Current Notification</h1>
                <div className='divider'> </div>
                <div className="notifications">
                   <RiChat1Line/>
                   <RiChat1Line/>
                   <RiChat1Line/>
                   <RiChat1Line/>
                   <RiChat1Line/>

                </div>


                <svg

          className="bg-waves"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "#ffffff", width: "133%", height: 50 }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>
        </div>


            <div className="row header">
                <Card Icon={MdOutlineAccountBalanceWallet} title="Balance" value="$ 1,35,000"/>
                <Card Icon={FaScaleUnbalancedFlip} title="Algo Accuracy" value="78%"/>
                <Card Icon={TbArrowsExchange} title="Transaction" value="$ 1,00,000"/>
                <Card Icon={IoCashOutline} title="Earnings" value="$ 35,000"/>
           
            
                <svg
          className="bg-waves__"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#ffffff",
            width: "133%",
            height: 50,
            transform: "rotate(180deg) scaleX(-1)",
          }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>


            </div>
          
            <span className="section-title"> Brief Overview</span>
            <div className="row square">
                 <Analytics chart_i/>

            </div>
            <div className="row square">  <Analytics chart_ii/>
            </div>
            <div className="row square">
            <Analytics chart_iii/>
            </div>
            <div className="row square">
            <Analytics title="New Followers" value="+ 0" illustration={img}/>
            </div>
            <span className="section-title">Analytic Tools</span>
            <div className="row tall-square">

            <svg
          className="bg-waves"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{ fill: "#ffffff", width: "167%", height: 115 }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>

          <span className='tools-section'>Frequently Used </span>

          <div className="tools">
          <Card Icon={RiToolsLine} />
          <Card Icon={IoSettingsOutline} />
          <Card Icon={AiOutlineUsergroupAdd} />
          <Card Icon={RiToolsLine} />
          <Card Icon={RiMailSettingsLine} />
          <Card Icon={RiListSettingsLine} />
        </div>

        <div className="divider"></div>
        <span className="tools-section">More Tools</span>

        <div className="tools">
        <Card Icon={RiUserSettingsLine} />
          <Card Icon={RiToolsLine} />
          <Card Icon={AiOutlineUsergroupAdd} />
          <Card Icon={RiToolsLine} />
          <Card Icon={AiOutlineUsergroupAdd} />
          <Card Icon={RiListSettingsLine} />
          <Card Icon={RiToolsLine} />
          <Card Icon={AiOutlineUsergroupAdd} />
          <Card Icon={RiMailSettingsLine} />
        </div>
        <div className="divider"></div>
        
        <span className="tools-section">Advanced Tools</span>

        <div className="tools">
          <Card Icon={RiFolderSettingsFill} />
          <Card Icon={RiFileSettingsLine} />
          <Card Icon={RiSettingsLine} />
        </div> 

            </div>
            <div className="row tall-square inv-bg">

            <svg
          className="bg-waves__"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            fill: "#ffffff",
            width: "133%",
            height: 50,
            transform: "rotate(180deg) scaleX(-1)",
          }}
        >
          <path
            d="M0 0v46.29c47.79 22.2 103.59 32.17 158 28 70.36-5.37 136.33-33.31 206.8-37.5 73.84-4.36 147.54 16.88 218.2 35.26 69.27 18 138.3 24.88 209.4 13.08 36.15-6 69.85-17.84 104.45-29.34C989.49 25 1113-14.29 1200 52.47V0z"
            opacity=".25"
          />
          <path
            d="M0 0v15.81c13 21.11 27.64 41.05 47.69 56.24C99.41 111.27 165 111 224.58 91.58c31.15-10.15 60.09-26.07 89.67-39.8 40.92-19 84.73-46 130.83-49.67 36.26-2.85 70.9 9.42 98.6 31.56 31.77 25.39 62.32 62 103.63 73 40.44 10.79 81.35-6.69 119.13-24.28s75.16-39 116.92-43.05c59.73-5.85 113.28 22.88 168.9 38.84 30.2 8.66 59 6.17 87.09-7.5 22.43-10.89 48-26.93 60.65-49.24V0z"
            opacity=".5"
          />
          <path d="M0 0v5.63C149.93 59 314.09 71.32 475.83 42.57c43-7.64 84.23-20.12 127.61-26.46 59-8.63 112.48 12.24 165.56 35.4C827.93 77.22 886 95.24 951.2 90c86.53-7 172.46-45.71 248.8-84.81V0z" />
        </svg>


        <header className="tall-square-header">
          <div className="left">
            <AiOutlineEdit className="icon" />
          </div>

          <div className="right">
            <GiSettingsKnobs className="icon" />
            <RiChat3Line className="icon" />
            <AiOutlineUserSwitch className="icon" />
          </div>
        </header>

        <div className="admin">
          <div className="profile">
            <img
              src="data:image/jpeg;base64,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"
              alt=""
              className="profile-img"
            />
          </div>

          <div className="info">
            <h2 className="admin-name">{username}</h2>
            <span className="admin-about">Trader</span>
          </div>

          <div className="admin-socials">
            <Card Icon={FaWhatsapp} />
            <Card Icon={FaInstagram} />
            <Card Icon={RiTwitterLine} />
            <Card Icon={FaDribbble} />
          </div>
        </div>


            </div>
            <div className="row side-rect">

            <section>
          <CircularProgress
            color="#810551"
            value={value_i}
            offset={value_i_offset}
          />

          <div className="summary">
            <h2 className="summary-title">Performance</h2>
            <span className="summary-info">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
              assumenda repudiandae aspernatur nemo mollitia, at ab cupiditate
              non nam. Officiis.
            </span>
          </div>

          <CircularProgress
            color="#00464e"
            value={value_ii}
            offset={value_ii_offset}
          />
        </section>
            </div>
            <div className="row side-rect">
            <section>
          <CircularProgress
            color="#00464e"
            value={value_ii}
            offset={value_ii_offset}
          />

          <div className="more-details">
            <h1 className="title">Detailed Analysis</h1>
            <span className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus consectetur dolore ea temporibus ducimus officiis hic
              ipsa reiciendis.
            </span>
          </div>
        </section>

            </div>
            <div className="row side-rect">
            <section>
          <CircularProgress
            color="#810551"
            value={value_i}
            offset={value_i_offset}
          />

          <div className="more-details">
            <h1 className="title">Detailed Analysis</h1>
            <span className="txt">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Repellendus consectetur dolore ea temporibus ducimus officiis hic
              ipsa reiciendis.
            </span>
          </div>
        </section>

            </div>
            
             </div>
    )
}

export default Content;