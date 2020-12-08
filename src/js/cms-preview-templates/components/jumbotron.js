import React from "react";
// js used for banner
export default class Jumbotron extends React.Component {
  render() {
    const {image, title, subtitle} = this.props;
    return <div>
      <div className="pv5 pv6-l ph3 bg-center cover" style={{
        backgroundImage: image && `url(${image})`
      }}>
        <div className="mw7 center ph3">
          <div className="db mb3">
            <div className="mw7 relative bg-fix-primary mb3">
              <h1 className="f2 f1-l b di lh-title mb3 white mw6 bg-primary">
                { title }
                // js used for title of each page
              </h1>
            </div>
            <div className="mw7 relative bg-fix-primary">
              {subtitle && <p className="b f4 di lh-title mb3 white mw6 bg-primary">{ subtitle }</p>}
              // js used for subtitle of each page  
            </div>
          </div>
        </div>
      </div>
    </div>;
  }
}
