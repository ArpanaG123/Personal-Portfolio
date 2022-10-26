import React from 'react'

const Resume = () => {
  return (
    <div>
        <div class = "section3">
            <div id = "Res">Resume</div>
            <div id = "line3"></div>
            <div class = "form1">
                <div class = "sec1">
                    <div id = "l1">Work Experience</div><hr  id='hr1'/>
                    <div id = "dot1"></div>
                    <div id = "l3">FullStack Development - Learning</div>
                    <button id = "but1">2022-Present</button>
                    <div id = "l4">PrepByte</div>
                    <div id = "l5"></div>
                    <div id = "dot2"></div>
                    <div id = "l6">Assistant system engineer - FULLTIME</div>
                    <button id = "but2">2020-Present</button>
                    <div id = "l7">Tcs,Mumbai</div>
                    <div id = "l8"></div>
    
                    <div id = "edu">Eductaion</div><hr id = "hr2" />
                    <div id = "dot3"></div>
                    <div id = "l10"></div>
                    <div id = "l11">Oriental Institute of Science & Technology</div>
                    <button id = "but3">2016-2020</button>
                    <div id = "l12">Bachelor in Engineering</div>
                    <p id = "l13">Reference site about Lorem Ipsum, <br />giving information on its origins.</p>
                </div>
                <div class = "sec2">
                    <img src = './Img/profess3.jpeg' alt = '' className='box' />
                    <div id = "im4"></div>
                    <div id = "bod1">
                        <img src = './Img/fb@2x.png' alt = '' className='lo1' />
                        <img src = './Img/behance@2x.png' alt = '' className='lo2' />
                        <img src = './Img/dribbble@2x.png' alt = '' className='lo3' />
                        <img src = './Img/pinterest@2x.png' alt = '' className='lo4' />
                        <img src = './Img/skype@2x.png' alt = '' className='lo5' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Resume;