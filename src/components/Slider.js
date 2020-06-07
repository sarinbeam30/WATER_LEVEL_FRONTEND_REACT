import React from 'react'
import { Slide } from 'react-slideshow-image';

const slideImages = [
    'dist/img/slide1.jpg',
    'dist/img/slide_2.jpg',
    'dist/img/slide_3.jpg'
  ];
  
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: true,
    arrows: true
  }

  export default function Content() {
    return (
        
        <div className="content-wrapper" >
          <Slide {...properties}>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[0]})`}}></div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[1]})`}}></div>
            </div>
            <div className="each-slide">
              <div style={{'backgroundImage': `url(${slideImages[2]})`}}></div>
            </div>
          </Slide>
          
          <div class="content" style={{ margin: '1% 1% 0px 1%'}}>
                <b><p>2011 Thailand flood</p></b>
                <p>	Flooding is a main issue of many cities,especially those that reside below the sea level, Bangkok which is one of those cities
                    suffered a huge damaged from one of the greatest flood since it’s founding back in year 2011.
                </p>
                <p>
                    The flooding began at the end of July triggered by the landfall of Tropical Storm Nock-ten. 
                    These floods soon spread through the provinces of northern, northeastern, and central Thailand along the Mekong and Chao Phraya river basins. 
                    In October floodwaters reached the mouth of the Chao Phraya and inundated parts of the capital city of Bangkok.
                </p>
                <p>According to wikipedia, The World Bank's estimate for this disaster means it ranks as the world's fourth costliest disaster as of 2011 surpassed only by the 2011 Tōhoku earthquake and tsunami in Japan,
                    Great Hanshin earthquake in 1995, Forest fires in 1997, Indian Ocean tsunami in 2004 and Hurricane Katrina in 2005. A 2015 study suggests increasing odds for potential flooding 
                    similar to the 2011 flood intensity to occur in the future.
                </p>

                <b><p>Risk of flood</p></b>
                <p>	Bangkok's tendency to flood is particularly acute. Bangkok and adjacent provinces are only 50 cm to two meters above sea level. Sea levels are rising four mm every year. 
                    The rising sea levels push more water into the Chao Phraya River. To combat rising sea levels a barrier dam stretching from Chonburi to Hua Hin has been proposed, at a cost of 500 billion baht.
                    <p style={{textAlign:'center'}}><img src="dist/img/26floodmap.jpg" className="offset-3" alt="User Image" style={{margin:'1.25% 0%'}} /></p>

                    The three-meter high dykes that sequester the river are subsiding, as is the rest of the city. In the past, some areas of Bangkok were sinking as much as three centimeters per year, due to excessive groundwater extraction.
                    Groundwater extraction was halted in 1977. That step has slowed subsidence to about one centimeter per year on average. However, the sheer weight of Bangkok's ever expanding infrastructure has exacerbated the problem. 
                    Bangkok has some 700 buildings more than 20 storeys high and 4,000 buildings eight to 20 storeys high. The sheer weight of these structures displaces the spongy soil and increases subsidence. In a 2015 report,
                    Thailand's National Reform Council warned that relocation of the capital was not out of the question.
                </p>

                <b><p>Thailand Sewage Monitering Website</p></b>
                <p>	2011 flood proved that flooding can cause a great damged to our country, infrastructure, economic, and most importantly, civilian lives. As chances of flooding is alarmingly huge for a capital city, due to the fact that the city itself its literally sinking from its sheer weight,
                    so it is very important for government official and civilian in the city to have the ability to know where in which area is in risk of flooding. But nowadays,
                    there are hardly way to tell especially in an unmonitered sewage system which run through the whole city.  
                    
                </p>
                <p>	Therefore, it is our vision for <b> Thailand sewage Monitering
                    website</b> to be a tool in helping those in need, or those who are in charge of looking after our sewage syastem
                    , to have the ability to better oversee what is happening beneath us and use that knowledge to prevent another catastrophe.
                </p>
          </div>
        </div>
        
        
    )
}
