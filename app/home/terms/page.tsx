"use client"
import Footer from "@/components/sections/Footer"
import Header from "@/components/sections/Header"
import { redirect } from "next/navigation"

export default function Terms() {
  return redirect("/")
  return (
    <>
    <Header />
    <div className="container mx-auto mt-[86px] px-4 py-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">الشروط والأحكام</h1>
      
      <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-right">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
          <p>
            مرحباً بك في فلنبن انفسنا. باستخدامك لموقعنا وخدماتنا التعليمية، فإنك توافق على الالتزام بهذه الشروط والأحكام.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">الخدمات التعليمية</h2>
          <p>عند استخدام خدماتنا التعليمية، أنت توافق على:</p>
          <ul className="list-disc mr-6 mt-2">
            <li>الالتزام بآداب الدرس والتعلم</li>
            <li>احترام المعلمين والطلاب الآخرين</li>
            <li>عدم تسجيل أو نشر المحتوى التعليمي دون إذن</li>
            <li>المحافظة على خصوصية جلسات التعلم</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">المحتوى التعليمي</h2>
          <p>
            جميع المحتويات التعليمية المقدمة في دروسنا ومحاضراتنا محمية بموجب حقوق الملكية الفكرية وتخضع لأحكام الشريعة الإسلامية في حفظ الحقوق. لا يجوز نسخ أو توزيع هذه المواد دون إذن صريح.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">المسؤولية والالتزامات</h2>
          <p>
            نحن نسعى لتقديم أفضل خدمة تعليمية ممكنة، ولكن لا نتحمل المسؤولية عن أي انقطاع في الخدمة أو صعوبات تقنية خارجة عن إرادتنا. نلتزم بتعويض أي درس يتم إلغاؤه من طرفنا.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">حقوق الإلغاء والتعديل</h2>
          <p>
            نحتفظ بالحق في تعديل مواعيد الدروس أو إلغائها في الحالات الطارئة، مع التزامنا بإخطار الطلاب مسبقاً وتعويض الدروس الملغاة.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">القانون المطبق</h2>
          <p>
            تخضع هذه الشروط والأحكام لقوانين الجمهورية التركية وتتوافق مع أحكام الشريعة الإسلامية. في حالة وجود أي نزاع، سيتم حله وفقاً للقوانين التركية المعمول بها وبما يتوافق مع الشريعة الإسلامية.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">التواصل والشكاوى</h2>
          <p>
            في حالة وجود أي استفسارات أو شكاوى، يمكنكم التواصل معنا عبر قنوات الاتصال المتاحة في الموقع. نلتزم بالرد على جميع الاستفسارات والشكاوى في أقرب وقت ممكن.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">التعديلات على الشروط</h2>
          <p>
            نحتفظ بالحق في تحديث هذه الشروط والأحكام من وقت لآخر. سيتم إخطار المستخدمين بأي تغييرات جوهرية، وسيعتبر استمرار استخدام الخدمات موافقة على الشروط المعدلة.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  )
} 