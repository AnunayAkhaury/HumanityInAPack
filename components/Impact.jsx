export default function Impact() {
    return (
      <section id='impact' className="py-20 bg-blue-500 text-white text-center">
        <div className="max-w-6xl mx-auto px-6">
          <h3 className="text-3xl md:text-4xl font-bold mb-10">
            Making a Difference
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">

            <div className="flex flex-col items-center">
              <div className="bg-white h-1 w-8 mb-2"></div> {/* Simple rectangle as placeholder */}
              <p className="text-lg font-medium">Care Packages Distributed</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white h-1 w-8 mb-2"></div> {/* Simple rectangle as placeholder */}
              <p className="text-lg font-medium">Volunteers Engaged</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white h-1 w-8 mb-2"></div> {/* Simple rectangle as placeholder */}
              <p className="text-lg font-medium">Community Partners</p>
            </div>

            <div className="flex flex-col items-center">
              <div className="bg-white h-1 w-8 mb-2"></div> {/* Simple rectangle as placeholder */}
              <p className="text-lg font-medium">Years of Impact</p>
            </div>
          </div>
        </div>
      </section>
    );
  }
  