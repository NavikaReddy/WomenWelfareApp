import React from 'react'
import './Faqs.css'
import {FaUsers}from 'react-icons/fa'
function Faqs() {
  return (
    <div>
    <h1 className='calc text-center mt-5'>FAQS</h1>
    <form>
                <div class="mb-3 form-floating">
                    <input type="text" name="username" id="test" class="form-control" placeholder="hi"/>
                    <label for="test" class="form-label">
                    <FaUsers className='users-icon'/> Type your Queries Here
                    </label>
                    <button className='btn btn-success mt-3'>Post</button>
                </div>
            </form>
    <p className='question lead fw-bold mt-2'>Q Why are my periods irregular and is this normal?</p>
    <p className='answer lead'>A The average menstrual cycle or gap between the periods is 28 to 30 days, but different women have different cycles, and this is perfectly normal. Things that affect your lifestyle such as stress, illness, weight (gain or loss) and exercise can all affect the cycle, as can hormonal contraception.Irregular periods are also very common during puberty and when nearing or during the menopause. If you have bleeding with or after sex, irregular bleeding between periods, which is different to what is normal for you, if there are fewer than three weeks between the periods themselves, or there is bleeding after the menopause, then your GP should be seen for further advice.</p>
    <p className='question lead fw-bold mt-2'>Q Should I eat or avoid eating any certain foods during pregnancy?</p>
    <p className='answer lead'>A Yes. Expecting mothers should eat foods that contain high amounts of iron, calcium, and protein; increased fiber and water intake will also help with any digestive issues related to pregnancy. On the other hand, you’ll want to avoid any raw foods, fish (specifically those containing mercury), and soft cheeses, among others.</p>
    <p className='question lead fw-bold mt-2'>Q Are there any options for treating morning sickness?</p>
    <p className='answer lead'>A Absolutely. Non-medical treatments may include eating something bland, like dry toast or crackers, before getting out of bed in the mornings. Foods that may be particularly difficult on the digestive system, such as greasy or spicy foods, should be avoided as they can exacerbate nausea. Try to take any medications with food rather than on an empty stomach, and drink plenty of water!</p>
    <p className='question lead fw-bold mt-2'>Q How much iron do women need?</p>
    <p className='answer lead'>A For adolescent women aged 14-18, the U.S. Food and Nutrition Board (FNB) recommended daily amount is 15 mg (27 mg if pregnant, 10 mg if lactating). For adult women aged 19-50, the FNB recommends 18 mg/day (27 mg if pregnant, 9 mg if lactating). For women 51+ years old, the recommended daily amount is 8 mg.</p>
    </div>
  )
}

export default Faqs