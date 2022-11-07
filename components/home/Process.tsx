function Process() {
  return (
    <div className="fluid-container process-base">
      <div className="process-title">So, how does it all work?</div>

      <div className="process-container">
        <div className="process-item process-color-A borderA">
          <div className="process-pronoun">You</div>
          <span id="p-1" className="p-text">
            give us a call
          </span>
        </div>
        <div className="process-item process-color-B px-5">
          <div className="process-pronoun">We</div>
          <span id="p-2" className="p-text">
            fix an appointment and find out what you need
          </span>
          <div className="process-puzzle-key process-color-A" />
        </div>
        <div className="process-item process-color-A color-switch-A px-5">
          <div className="process-pronoun">We</div>
          <span id="p-3" className="p-text">
            design and give a quote
          </span>
          <div className="process-puzzle-key process-color-B " id="disB" />
        </div>
        <div className="process-item process-color-B color-switch-B px-5">
          <div className="process-pronoun">We</div>
          <span id="p-4" className="p-text">
            co-ordinate with your civil contractor, plumber and everyone else
            involved
          </span>
          <div className="process-puzzle-key process-color-A" id="disA" />
        </div>
        <div className="process-item process-color-A px-5">
          <div className="process-pronoun">We</div>
          <span id="p-5" className="p-text">
            deliver and fit your new interior
          </span>
          <div className="process-puzzle-key process-color-B" id="disB" />
        </div>
        <div className="process-item process-color-B px-5 borderB">
          <span id="p-6">WE{"'"}RE DONE</span>
          <div className="process-puzzle-key process-color-A" />
        </div>
      </div>
    </div>
  );
}

export default Process;
