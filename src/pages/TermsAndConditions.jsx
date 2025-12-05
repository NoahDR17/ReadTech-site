import { Helmet } from "@dr.pogodin/react-helmet";
import Container from "../components/Container.jsx";

export default function TermsAndConditions() {
  return (
    <>
      <Helmet>
        <title>Terms & Conditions — Readtech</title>
        <meta 
          name="description" 
          content="Read our terms and conditions for selling your phone to Readtech. Clear, fair, and legally binding terms to protect both parties." 
        />
      </Helmet>

      <section className="py-12 md:py-16 bg-gray-50">
        <Container className="max-w-4xl">
          <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 md:p-8 lg:p-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Terms & Conditions</h1>
            <p className="mt-2 text-sm text-gray-500"><strong>Effective Date:</strong> 21 September 2025</p>
      
            <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
              <p>
                By placing a sell order with Go Green Gadgets ("we", "us", "our"), you agree to these Terms and Conditions.
                They are designed to ensure a clear, fair, and legally binding process and to protect our business from loss
                caused by inaccurate information, misuse, or fraud.
              </p>
      
              <p>If you do not agree to these Terms, do not submit a sell order.</p>
              <p>We recommend you print or save a copy for your records.</p>
            </div>
      
            <div className="mt-8 space-y-8">
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">1. Eligibility & Contract Formation</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Our services are intended for residents and businesses in Great Britain and Northern Ireland. Orders from other regions may be declined at our discretion.</p>
      
                  <p>To place an order, you must:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be at least 18 years old, or have the consent of a parent/guardian.</li>
                    <li>Be legally capable of entering into a binding contract.</li>
                    <li>Be the legal owner of the device(s) being sold, with full rights to transfer ownership.</li>
                  </ul>
      
                  <p>When you submit an order through our website, you create a binding contract with us.</p>
      
                  <p>Ownership of devices passes to us once:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We receive the device(s), and</li>
                    <li>Payment is issued.</li>
                  </ul>
      
                  <p>We may request proof of purchase or ID. If you cannot provide this, payment may be withheld or the device(s) recycled.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">2. Cancellations</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>You may cancel your order at any point before the device(s) are shipped.</p>
                  <p>Once devices are shipped, cancellation is no longer possible.</p>
                  <p>If you want devices returned after shipping, a £15 handling and postage fee per parcel applies.</p>
                  <p>Devices that cannot be returned (e.g., unsafe batteries, blacklisted IMEIs) may be recycled without payment.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">3. Quotes & Valuations</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Online quotes are estimates only and are not guaranteed.</p>
                  <p>Final values are determined solely by our inspection team after testing and verification.</p>
                  <p>If a device's condition differs from what you declared, we will provide a revised quote.</p>
      
                  <p>Revised quotes are:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Sent by email.</li>
                    <li>Valid for 7 calendar days.</li>
                    <li>Automatically accepted and paid if you do not respond within 7 days.</li>
                  </ul>
      
                  <p>If you request the device to be returned after rejecting a revised quote, the £15 return fee must be paid first.</p>
                  <p>Accessories (chargers, cases, boxes, SIMs, etc.) do not affect valuations and will not be returned.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">4. Device Inspection Process</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Every device is tested on arrival. Tests may include:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Power on/off functionality.</li>
                    <li>Screen, touch, LCD, and pixel checks.</li>
                    <li>Battery diagnostics (capacity, charge cycles, maximum capacity %).</li>
                    <li>Button, port, speaker, microphone, and vibration functionality.</li>
                    <li>Camera and flash tests.</li>
                    <li>Network connectivity (Wi-Fi, Bluetooth, mobile signal).</li>
                    <li>Sensor checks (proximity, accelerometer, Face ID/Touch ID, NFC).</li>
                    <li>IMEI/ESN blacklist and finance checks.</li>
                    <li>Software checks to confirm the device has not been rooted/jailbroken.</li>
                  </ul>
      
                  <p>Our classification of condition (Great, Good, Poor, Faulty) is final.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">5. Device Condition Standards</h2>
      
                <div className="space-y-5">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Great / Like New</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Looks almost new with no cracks, dents, or heavy wear.</li>
                      <li>Screen is flawless (no scratches visible at arm's length).</li>
                      <li>Battery health ≥90%.</li>
                      <li>100% fully functional.</li>
                      <li>Original UK model, no modification.</li>
                    </ul>
                  </div>
      
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Good</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Light wear (minor scratches or scuffs only).</li>
                      <li>No cracks in screen or body.</li>
                      <li>Battery health ≥85%.</li>
                      <li>Fully functional.</li>
                      <li>UK model, unmodified software/hardware.</li>
                    </ul>
                  </div>
      
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Poor / Used</h3>
                    <ul className="list-disc pl-6 space-y-2 text-gray-600">
                      <li>Noticeable cosmetic wear (scratches, scuffs, dents, paint loss).</li>
                      <li>Screen intact but may have light scratches.</li>
                      <li>Battery health ≥80%.</li>
                      <li>Fully functional.</li>
                      <li>UK model with original hardware/software.</li>
                    </ul>
                  </div>
      
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Faulty / Cracked</h3>
                    <div className="space-y-3 text-gray-600">
                      <p>Includes (but not limited to):</p>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Cracks in glass or casing.</li>
                        <li>Heavy dents, bent housing, engraving, or severe cosmetic damage.</li>
                        <li>Screen burn, dead pixels, pressure marks, backlight bleeding.</li>
                        <li>Severe display damage (deep scratches, chips, delamination).</li>
                        <li>More than 2 faults = revised quote or zero value.</li>
                        <li>Faulty or missing parts (buttons, ports, camera, sensors, Face ID, Touch ID).</li>
                        <li>Charging failures, boot loops, freezing, overheating.</li>
                        <li>Liquid damage or signs of corrosion.</li>
                        <li>Battery health &lt;75%.</li>
                        <li>Missing stylus (if required).</li>
                        <li>Non-UK models, modified, rooted, or jailbroken devices.</li>
                        <li>Barred, locked, or tampered devices.</li>
                      </ul>
                      <p className="font-semibold bg-yellow-50 p-3 rounded border border-yellow-200 text-gray-700">
                        ⚠️ Devices in the "Faulty" category may be recycled without payment if unrepairable.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">6. Batteries</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Battery health is measured against Apple/Android diagnostics.</p>
                  <p>Devices below 83% battery health are automatically revalued.</p>
                  <p>Replacement costs will be deducted from final payment.</p>
                  <p>Devices that do not power on are classified as Faulty.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">7. Locked, Blocked & Barred Devices</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Devices must not be iCloud, Google, Samsung, or account locked.</p>
                  <p>If received locked:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>We will notify you.</li>
                    <li>If not unlocked within 14 days, the device will be recycled without payment.</li>
                  </ul>
      
                  <p>Devices found to be blacklisted, barred, stolen, or under finance cannot be purchased.</p>
                  <p>These may be held and referred to the police or relevant authorities.</p>
                  <p>Return of such devices is at our discretion and subject to a £25 admin fee.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">8. Shipping & Risk</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Devices must be packaged securely before shipping.</p>
                  <p>Risk remains with you until we log the device into our system.</p>
                  <p>Royal Mail compensation is capped at £100 per parcel (subject to Royal Mail approval).</p>
                  <p>Devices worth more than £100 are not fully insured under standard Royal Mail services.</p>
                  <p>We are not liable for items lost, delayed, or damaged in transit.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">9. Data Responsibility</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>You must remove all personal accounts (iCloud, Google, Samsung, etc.) and data before shipping.</p>
                  <p>We do not guarantee data removal and accept no liability for residual data.</p>
                  <p>By sending us a device, you accept responsibility for ensuring your personal data is erased.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">10. Payments</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Payments are made via bank transfer only.</p>
                  <p>Devices delivered before 1pm are usually processed the same day.</p>
                  <p>Deliveries after 1pm may be processed the next working day.</p>
      
                  <p>Payments may be delayed if:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Devices fail security checks.</li>
                    <li>Fraud prevention or finance checks are pending.</li>
                    <li>Devices are locked, damaged, or incorrectly described.</li>
                  </ul>
      
                  <p>We reserve the right to request repayment if overpayment is made in error.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">11. Non-Return & Recycling</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Devices may be recycled without payment if:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>They are beyond repair.</li>
                    <li>They are uneconomical to refurbish.</li>
                    <li>They are locked or unresponsive after 1 month.</li>
                  </ul>
      
                  <p>We are under no obligation to return devices unless return postage is paid in advance.</p>
                  <p>If fees are not paid within 14 days of request, devices will be permanently recycled.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">12. Liability</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Our maximum liability is the final valuation of your device.</p>
                  <p>We are not responsible for indirect losses, including:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Loss of data.</li>
                    <li>Missed calls, messages, or contacts.</li>
                    <li>Network disconnections.</li>
                  </ul>
      
                  <p>By selling to us, you indemnify us against claims arising from stolen, financed, or misrepresented devices.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">13. Fraud & Misrepresentation</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>Selling stolen, financed, or counterfeit devices is illegal.</p>
                  <p>Any suspected fraud will be reported to the police and relevant authorities.</p>
                  <p>We reserve the right to withhold payment indefinitely during investigations.</p>
                  <p>Devices may be held as evidence and not returned.</p>
                </div>
              </section>
      
              <section>
                <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">14. Governing Law</h2>
                <div className="space-y-3 text-gray-600 leading-relaxed">
                  <p>These Terms are governed by the laws of England & Wales.</p>
                  <p>Any disputes will be settled exclusively in the courts of England & Wales.</p>
                </div>
              </section>

              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-center text-sm text-gray-500">© 2025 ReadTech. All rights reserved.</p>
              </div>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
