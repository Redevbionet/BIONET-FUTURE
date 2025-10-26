import React from 'react';
import Card from './Card';
import { CpuChipIcon } from './icons/CpuChipIcon';
import { GlobeAltIcon } from './icons/GlobeAltIcon';
import { CubeTransparentIcon } from './icons/CubeTransparentIcon';
import { BoltIcon } from './icons/BoltIcon';

const features = [
  {
    icon: <CpuChipIcon className="h-10 w-10 text-sky-500" />,
    title: 'การวิเคราะห์ความเสี่ยงด้วย AI Wallet Risk Checker',
    description: 'ช่วยให้การวิเคราะห์ความเสี่ยงอัจฉริยะรวดเร็วยิ่งขึ้น โดยใช้ AI เพื่อวิเคราะห์พฤติกรรมการทำธุรกรรมและระบุบุคคลที่มีส่วนเกี่ยวข้อง ระบบจะให้คะแนนความเสี่ยงของกระเป๋าเงินที่แม่นยำ พร้อมป้ายกำกับเอนทิตี และแจ้งเตือนกิจกรรมที่น่าสงสัย คัดกรองกระเป๋าเงินได้อย่างง่ายดายและมั่นใจได้ว่าเป็นไปตามมาตรฐาน AML/CFT'
  },
  {
    icon: <GlobeAltIcon className="h-10 w-10 text-sky-500" />,
    title: 'การคว่ำบาตรและการปฏิบัติตามกฎระเบียบทั่วโลก',
    description: 'ระบบนี้ให้การเข้าถึงฐานข้อมูลขนาดใหญ่ที่รวบรวมรายชื่อมาตรการคว่ำบาตรทั่วโลก เช่น OFAC ของสหรัฐอเมริกา สหประชาชาติ แคนาดา สหราชอาณาจักร สหภาพยุโรป สวิตเซอร์แลนด์ และออสเตรเลีย ระบบจะดึงข้อมูลจากเครือข่ายบล็อกเชนหลักและแหล่งข้อมูลข่าวกรองระดับโลกทั้งหมด เพื่อให้มั่นใจว่าการปฏิบัติตามกฎระเบียบของคุณมีความปลอดภัยในทุกพื้นที่'
  },
  {
    icon: <CubeTransparentIcon className="h-10 w-10 text-sky-500" />,
    title: 'ครอบคลุมบล็อกเชนอย่างครอบคลุม',
    description: 'ปัจจุบันโซลูชันของเรารองรับบล็อกเชนหลักมากกว่า 10 แห่ง และมีป้ายกำกับมากกว่า 100 ล้านรายการ'
  },
  {
    icon: <BoltIcon className="h-10 w-10 text-sky-500" />,
    title: 'ความน่าเชื่อถือและประสิทธิภาพ',
    description: 'API ของเรารวดเร็ว ตอบสนองภายในไม่กี่วินาที และสร้างขึ้นเพื่อจัดการข้อมูลปริมาณมากได้อย่างง่ายดาย'
  }
];

const WalletRiskChecker: React.FC = () => {
  return (
    <div className="py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">Wallet Risk Checker</h2>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-300 max-w-4xl mx-auto">
          ตรวจสอบความเสี่ยงของกระเป๋าเงินอย่างมีประสิทธิภาพโดยใช้ AI เพื่อวิเคราะห์คะแนนความเสี่ยง ติดป้ายกำกับหน่วยงานกระเป๋าเงิน และตรวจจับกิจกรรมที่น่าสงสัยเพื่อธุรกรรมที่ปลอดภัยและเป็นไปตามข้อกำหนด
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {features.map((feature, index) => (
          <Card key={index} className="flex flex-col items-start p-8">
            <div className="mb-4">{feature.icon}</div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{feature.title}</h3>
            <p className="text-gray-500 dark:text-gray-400">{feature.description}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default WalletRiskChecker;