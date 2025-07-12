"use client"
import Header from "@/components/sections/Header"
import Footer from "@/components/sections/Footer"
import { redirect } from "next/navigation"


export default function PrivacyPolicy() {
  return redirect("/")
  return (
    <>
    <Header />
    <div className="container mx-auto mt-[86px] px-4 py-16 min-h-screen">
      <h1 className="text-3xl font-bold mb-8 text-center">سياسة الخصوصية</h1>
      
      <div className="prose prose-lg max-w-4xl mx-auto space-y-6 text-right">
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">مقدمة</h2>
          <p>
            نحن في فلنبن انفسنا نقدر خصوصيتك ونلتزم بحماية بياناتك الشخصية. تشرح هذه السياسة كيفية جمعنا واستخدامنا وحماية معلوماتك عند استخدام موقعنا وخدماتنا.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">المعلومات التي نجمعها</h2>
          <p>نحن نجمع المعلومات التالية:</p>
          <ul className="list-disc mr-6 mt-2">
            <li>معلومات التسجيل الأساسية (الاسم، البريد الإلكتروني)</li>
            <li>معلومات الاتصال</li>
            <li>معلومات الجلسة وتفاعلك مع الموقع</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">كيفية استخدام المعلومات</h2>
          <p>نستخدم معلوماتك للأغراض التالية:</p>
          <ul className="list-disc mr-6 mt-2">
            <li>تقديم خدمات التعليم والدروس</li>
            <li>التواصل معك بخصوص الدروس والتحديثات</li>
            <li>تحسين تجربة التعلم</li>
            <li>تنظيم وإدارة الدروس والمحاضرات</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">حماية المعلومات</h2>
          <p>
            نتخذ إجراءات أمنية مناسبة لحماية معلوماتك وفقاً للقوانين التركية المعمول بها ومبادئ الشريعة الإسلامية في حفظ الأمانات.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">حقوقك</h2>
          <p>وفقاً للقوانين التركية لحماية البيانات، لديك الحق في:</p>
          <ul className="list-disc mr-6 mt-2">
            <li>الوصول إلى بياناتك الشخصية</li>
            <li>تصحيح بياناتك</li>
            <li>طلب حذف بياناتك</li>
            <li>الاعتراض على معالجة بياناتك</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">القانون المطبق</h2>
          <p>
            تخضع هذه السياسة لقوانين الجمهورية التركية وتتوافق مع أحكام الشريعة الإسلامية في حفظ الحقوق والخصوصية.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">تواصل معنا</h2>
          <p>
            إذا كان لديك أي أسئلة حول سياسة الخصوصية، يمكنك التواصل معنا عبر وسائل التواصل المتاحة في أسفل الصفحة.
          </p>
        </section>
      </div>
    </div>
    <Footer />
    </>
  )
} 