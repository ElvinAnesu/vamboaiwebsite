import { Link } from "react-router-dom";

const BlogDetailsBody = () => {
  return (
    <>
      <div className="section-space-sm-top section-space-sm-bottom">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-xl-8">
          <img src="/img/blog-details-main.png" alt="image" className="img-fluid rounded-1 object-fit-cover"/>
          <p className="clr-neutral-80 fw-bold fs-18 mt-14 mb-6">Every great engineer knows how to toggle between two fundamentally different, yet equally important styles of work: "Let's wing it" hacking and corporate-level "measure twice, cut once" engineering.</p>
          <p className="clr-neutral-80">You may already be familiar with Writebot - an automation platform that enables users to streamline operations within and between more than 5,000 applications without any need for coding. You can automate an action in one app to trigger an action in another platform in a process Writebot calls a Zap. Then there's Jasper. This AI marketing platform shares a common purpose with Writebot - freeing up users time by taking care of routine tasks so they can concentrate on work that demands more creativity and strategic thinking.</p>
          <h4 className="h4 fw-bold clr-neutral-90 mt-10 mb-6">What is an SEO audit?</h4>
          <p className="clr-neutral-80">An SEO audit is a meticulous examination of your website's on-page and off-page elements, designed to identify strengths, weaknesses, and opportunities for improvement. This process delves into your site's technical, content, and backlink aspects to enhance its visibility in search engine results . his process delves into content, and backlink aspects to enhance its visibility in search engine results.</p>
          <h4 className="h4 fw-bold clr-neutral-90 mt-10 mb-6">Significance of Performing an SEO Audit</h4>
          <p className="clr-neutral-80 mb-8">Regular SEO audits are pivotal in maintaining your website's health and competitiveness in the digital landscape. They are essential for several reasons:</p>
          <ul className="list list-column gap-8">
            <li className="clr-neutral-80">
              <span className="fw-bold">Detecting & Fixing Technical Issues:</span> SEO audits help uncover and address technical issues hindering your site's performance, such as broken links, site speed problems, and mobile-friendliness issues.
            </li>
            <li className="clr-neutral-80">
              <span className="fw-bold">Improving User Experience:</span> By optimizing your website's content and structure based on audit findings, you can enhance the user experience, which is a key factor in SEO and user retention.
            </li>
            <li className="clr-neutral-80">
              <span className="fw-bold">dentifying Opportunities for Keyword Optimization:</span> SEO audits highlight opportunities for improving your site's keyword strategy, ensuring you're targeting the right terms to attract your desired audience.
            </li>
            <li className="clr-neutral-80">
              <span className="fw-bold">Boosting Organic Traffic and Search Engine Rankings:</span> With a well-executed audit, you can increase organic traffic and improve your site's search engine rankings, resulting in more visibility and potential customers.
            </li>
            <li className="clr-neutral-80">
              <span className="fw-bold">Staying Ahead of Evolving Search Engine Algorithms:</span> Search engines frequently update their algorithms. SEO audits help you adapt to these changes and maintain or improve your rankings.
            </li>
          </ul>
          <div className="row gy-4 my-6">
            <div className="col-sm-6">
              <img src="/img/blog-details-1.png" alt="image" className="img-fluid rounded-4 object-fit-cover"/>
            </div>
            <div className="col-sm-6">
              <img src="/img/blog-details-2.png" alt="image" className="img-fluid rounded-4 object-fit-cover"/>
            </div>
          </div>
          <h4 className="h4 fw-bold clr-neutral-90 mt-10 mb-6">What are the different types of SEO audits?</h4>
          <p className="clr-neutral-80 mb-8">SEO audits are comprehensive evaluations of a website's search engine optimization (SEO) performance and are conducted to identify areas that need improvement. There are several types of SEO audits, each focusing on specific aspects of SEO. Here are some of the most common types of SEO audits:</p>
          <p className="clr-neutral-80 mb-8">On-Page SEO Audit: This audit examines the on-page elements of a website, including title tags, meta descriptions, headers, keyword usage, content quality, and internal linking. It aims to ensure that on-page elements are optimized for search engines and user experience.</p>
          <ol className="mt-6 ps-4 d-flex flex-column gap-6">
            <li className="clr-neutral-80">Technical SEO Audit: Technical SEO audits focus on the technical aspects of a website, such as site speed, mobile-friendliness, crawlability, indexability, structured data markup, and XML sitemaps. The goal is to address issues that might hinder search engine bots from properly indexing and ranking the site. </li>
            <li className="clr-neutral-80">Off-Page SEO Audit: Off-page SEO audits concentrate on factors that influence a website's authority and trustworthiness in the eyes of search engines. This includes backlink analysis, social signals, and online reputation management.</li>
            <li className="clr-neutral-80">Content Audit: Content audits assess the quality and relevance of the content on a website. This includes analyzing the content's alignment with target keywords, user intent, and ability to engage and inform the audience efficient part of transformer inference.</li>
          </ol>
          <h4 className="h4 fw-bold clr-neutral-90 mt-10 mb-6">Prompt Processing is Really Cheap</h4>
          <p className="clr-neutral-80 mb-8">SEO audits are comprehensive evaluations of a website's search engine optimizations (SEO) performance and are conducted to identify areas that need improvement. There are several types of SEO audits, each focusing on specific aspects of SEO. Here are some of the most common types of SEO audits:</p>
          <p className="clr-neutral-80 mb-6">Prompt processing or the time to first token is the most efficient part of transformer inference, and you should expect 3x price cuts relative to gpt-3.5. For a model with -parameters and an -length prompt, the memory requirement for processing a prompt is about 2 Bytes, while the compute requirement is 2 FLOPs. Since A100s can handle 312 TFLOPs of matmul and 2 TB/s of memory bandwidth, we are compute-bound for sequence lengths 156.9 On A100s, FLOPs utilization will likely max out just a bit under 70% MFU. This amounts to around 200TFLOPs. 2-80GB A100s will cost us around $4.42/hr10, which comes out to $ 0.0012 /second. The FLOPs requirement for Llama is 140 TFLOPs/token. Given the aggregate FLOPs for 2 A100s, we can calculate what the tokens per second should look like:</p>
          <div className="d-flex flex-wrap align-items-center justify-content-between mt-10 gap-5">
            <div className="d-flex flex-wrap align-items-center justify-content-between gap-4 mt-10 w-100">
              <div className="d-flex flex-wrap align-items-center gap-4">
                <span className="clr-neutral-90 fw-extrabold">Tags</span>
                <ul className="list list-row flex-wrap gap-4">
                  <li>
                    <Link href="/blog-2" className="py-3 px-6 border border-neutral-17 rounded-2 clr-neutral-90 link fs-14 d-block :bg-primary-key :clr-white">Content Marketing</Link>
                  </li>
                  <li>
                    <Link href="/blog-2" className="py-3 px-6 border border-neutral-17 rounded-2 clr-neutral-90 link fs-14 d-block :bg-primary-key :clr-white">Design</Link>
                  </li>
                  <li>
                    <Link to="/blog-2" className="py-3 px-6 border border-neutral-17 rounded-2 clr-neutral-90 link fs-14 d-block :bg-primary-key :clr-white">Development</Link>
                  </li>
                </ul>
              </div>
              <div className="d-flex flex-wrap align-items-center gap-4">
                <span className="clr-neutral-90 fw-extrabold">Share On</span>
                <ul className="list list-row align-items-center gap-2">
                  <li>
                    <Link href="https://www.behance.net/" className="w-9 h-9 link border border-neutral-80 rounded-circle d-flex align-items-center justify-content-center clr-neutral-80 :bg-primary-key :clr-white :border-primary-key"><i className="bi bi-behance"></i></Link>
                  </li>
                  <li>
                    <Link href="https://www.facebook.com/" className="w-9 h-9 link border border-neutral-80 rounded-circle d-flex align-items-center justify-content-center clr-neutral-80 :bg-primary-key :clr-white :border-primary-key"><i className="bi bi-facebook"></i></Link>
                  </li>
                  <li>
                    <Link href="https://www.linkedin.com/" className="w-9 h-9 link border border-neutral-80 rounded-circle d-flex align-items-center justify-content-center clr-neutral-80 :bg-primary-key :clr-white :border-primary-key"><i className="bi bi-linkedin"></i></Link>
                  </li>
                  <li>
                    <Link href="https://twitter.com/" className="w-9 h-9 link border border-neutral-80 rounded-circle d-flex align-items-center justify-content-center clr-neutral-80 :bg-primary-key :clr-white :border-primary-key"><i className="bi bi-twitter"></i></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="section-space-sm-top">
              <div className="p-sm-10 p-5 bg-neutral-4 d-sm-flex d-block align-items-center gap-8 rounded-3">
                <div className="author-thumb rounded-circle overflow-hidden flex-shrink-0">
                  <img src="/img/author.png" alt="img"/>
                </div>
                <div className="flex-grow-1 mt-sm-0 mt-4">
                  <h5 className="clr-neutral-90 fs-20 fw-extrabold mb-1">Kristin Watsons</h5>
                  <p className="fw-semibold clr-secondary-key"> Visitsite: <Link href="#" className="clr-secondary-key">themetags.com</Link>
                  </p>
                  <p className="clr-neutral-87">Progressively transition integrated content whereas efficient Objectively restore inter mandated value without optimal relationships.</p>
                  <ul className="list list-row align-items-center gap-4">
                    <li>
                      <Link href="https://www.facebook.com/" className="w-9 h-9 link border border-neutral-80 rounded-circle d-flex align-items-center justify-content-center clr-neutral-80 :bg-primary-key :border-primary-key :clr-white"><i className="bi bi-facebook"></i></Link>
                    </li>
                    <li>
                      <Link href="https://www.linkedin.com/" className="w-9 h-9 link border border-neutral-80 rounded-circle d-flex align-items-center justify-content-center clr-neutral-80 :bg-primary-key :border-primary-key :clr-white"><i className="bi bi-linkedin"></i></Link>
                    </li>
                    <li>
                      <Link href="https://twitter.com/" className="w-9 h-9 link border border-neutral-80 rounded-circle d-flex align-items-center justify-content-center clr-neutral-80 :bg-primary-key :border-primary-key :clr-white"><i className="bi bi-twitter"></i></Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="section-space-sm-top w-100">
              <div className="row g-4 g-md-0 align-items-center w-100">
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-5">
                    <div className="w-18 h-18 rounded-circle overflow-hidden flex-shrink-0">
                      <img src="/img/blog-details-prev.png" alt="image" className="img-fluid w-100 h-100 object-fit-cover"/>
                    </div>
                    <div className="flex-grow-1">
                      <h5 className="mb-1">
                        <Link to="/blog-details" className="link d-block clr-neutral-90 fw-bold fs-18 max-text-20 :clr-primary-key">Improving Website Performan with Lite Speed.</Link>
                      </h5>
                      <span className="clr-neutral-50 fs-14">By Sachin Rahul</span>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex align-items-center gap-5 flex-md-row-reverse">
                    <div className="w-18 h-18 rounded-circle overflow-hidden flex-shrink-0">
                      <img src="/img/blog-details-next.png" alt="image" className="img-fluid w-100 h-100 object-fit-cover"/>
                    </div>
                    <div className="flex-grow-1 text-md-end">
                      <h5 className="mb-1">
                        <Link to="/blog-details" className="link d-inline-block clr-neutral-90 fw-bold fs-18 max-text-20 :clr-primary-key">Attentive was born in 2015 sales teams</Link>
                      </h5>
                      <span className="clr-neutral-50 fs-14">By Sachin Rahul</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-space-sm-top">
              <h4 className="clr-neutral-90 fw-extrabold fs-24 mb-8">Comments(02)</h4>
              <div className="d-sm-flex">
                <div className="w-22 h-22 flex-shrink-0">
                  <img src="/img/comment-1.png" alt="image"/>
                </div>
                <div className="flex-grow-1 ps-sm-6 mt-sm-0 mt-5">
                  <div className="d-flex justify-content-between align-items-center mb-5">
                    <h5 className="fs-18 clr-neutral-90 fw-bold mb-0">Randay K. Melton</h5>
                    <span className="clr-neutral-80 fs-14">05.03.2023[11.00am]</span>
                  </div>
                  <p className="clr-neutral-80">Dynamically streamline user-centric ROI vis-a-vis compelling interfaces. Professionally iterate cooperative human</p>
                  <Link href="#0" className="link clr-white fs-14 text-uppercase"><i className="bi bi-reply"></i> Reply</Link>
                </div>
              </div>
              <div className="ps-sm-25 ps-10 mt-10">
                <div className="d-sm-flex">
                  <div className="w-22 h-22 flex-shrink-0">
                    <img src="/img/comment-2.png" alt="image"/>
                  </div>
                  <div className="flex-grow-1 ps-sm-6 mt-sm-0 mt-5">
                    <div className="d-flex justify-content-between align-items-center mb-5">
                      <h5 className="fs-18 clr-neutral-90 fw-bold mb-0">William D. Miller</h5>
                      <span className="clr-neutral-80 fs-14">05.03.2023[11.00am]</span>
                    </div>
                    <p className="clr-neutral-80">User-centric ROI vis-a-vis compelling interfaces. Professionally iterate cooperative human capital through frictionless innovation.</p>
                    <Link href="#0" className="link clr-white fs-14 text-uppercase"><i className="bi bi-reply"></i> Reply</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="section-space-sm-top">
              <h4 className="clr-neutral-90 fw-extrabold fs-24 mb-2">Leave a Comments</h4>
              <p className="clr-neutral-80">Your email address will not be published Required fields are marked * </p>
              <form className="mt-10 comment-form">
                <div className="row gy-4">
                  <div className="col-lg-6">
                    <label htmlFor="username" className="d-inline-block mb-4 clr-neutral-90">Name</label>
                    <input id="username" type="text" className="form-control h-13 bg-transparent border border-neutral-10 rounded-1 clr-neutral-80 px-5" placeholder="Name"/>
                  </div>
                  <div className="col-lg-6">
                    <label htmlFor="usermail" className="d-inline-block mb-4 clr-neutral-90">Email</label>
                    <input id="usermail" type="email" className="form-control h-13 bg-transparent border border-neutral-10 rounded-1 px-5" placeholder="Email"/>
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="usersite" className="d-inline-block mb-4 clr-neutral-90">Website URL</label>
                    <input id="usersite" type="url" className="form-control h-13 bg-transparent border border-neutral-10 rounded-1 px-5" placeholder="Website"/>
                  </div>
                  <div className="col-lg-12">
                    <label htmlFor="usercomment" className="d-inline-block mb-4 clr-neutral-90">Comments</label>
                    <textarea id="usercomment" cols="30" rows="10" className="form-control bg-transparent border border-neutral-10 rounded-1 px-5 py-4" placeholder="Comment Here"></textarea>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="py-4 px-6 clr-white transition bg-primary-key :bg-primary-30 border-0 rounded-2">Post Comment</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
};

export default BlogDetailsBody
