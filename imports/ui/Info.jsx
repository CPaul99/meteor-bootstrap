import React from 'react';
import { useFind, useSubscribe } from 'meteor/react-meteor-data';
import { LinksCollection } from '../api/links';

export const Info = () => {
  const isLoading = useSubscribe('links');
  const links = useFind(() => LinksCollection.find());

  if(isLoading()) {
    return (
      <div className="text-center p-5">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    );
  }

  return (
    <div className="card shadow-sm">
      <div className="card-body p-4">
        <h2 className="card-title mb-4">
          <i className="bi bi-book"></i> Learn Meteor!
        </h2>
        <ul className="list-group list-group-flush">{links.map(
          link => <li key={link._id} className="list-group-item">
            <a href={link.url} target="_blank" className="text-decoration-none d-flex align-items-center">
              <span className="badge bg-primary me-2">→</span>
              {link.title}
            </a>
          </li>
        )}</ul>
      </div>
    </div>
  );
};
