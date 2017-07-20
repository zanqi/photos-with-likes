import React from 'react';

const AddPhoto = () => {
    return (
        <div className="col-md-4 col-md-offset-4 clearfix">
            <div className="imageCard">
                <form action="">
                    <div className="form-group">
                        <input type="file" />
                    </div>

                    <div className="form-group">
                        <input type="text" className="form-control" placeholder="Description" />
                    </div>

                    <button type="submit" className="btn btn-primary">Add</button>
                </form>

            </div>
        </div>
    );
};

export default AddPhoto;