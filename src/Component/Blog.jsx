import React from 'react';

const Blog = () => {
    return (
        <div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title font-semibold">What is the event happening this weekend near me?</div>
                <div className="collapse-content text-sm">Click the "Sign Up" button in the top right corner and follow the registration process.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">Do I need to buy a ticket to attend the event?</div>
                <div className="collapse-content text-sm">Yes, there is an entry fee of BDT 200. However, students can enter for free by showing their ID card at the entrance.</div>
            </div>
            <div className="collapse collapse-plus bg-base-100 border border-base-300">
                <input type="radio" name="my-accordion-3" />
                <div className="collapse-title font-semibold">What activities will be available at the event?</div>
                <div className="collapse-content text-sm">The event will include keynote speeches from industry leaders, a startup pitch competition, hands-on coding workshops, and a tech product demo zone..</div>
            </div>
         
        </div>
    );
};

export default Blog;