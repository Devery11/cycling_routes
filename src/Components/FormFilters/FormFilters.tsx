import React, {useCallback, useState} from "react";
import {Filters} from "../../../types/Filters";

type Props = {
    onSubmit: React.Dispatch<React.SetStateAction<Filters>>;
};

export const FormFilters: React.FC<Props> = ({ onSubmit }) => {
    const [filters, setFilters] = useState<Filters>({});

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        onSubmit(filters);
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            <h2 className="form__title">Select filters:</h2>
            <label className="form__label">
                Time period:
                <input
                    type="date"
                    className="form__input"
                    onChange={(event) =>
                        setFilters((prevState) => (
                            {
                                ...prevState,
                                limit: "20000",
                                starttime: event.target.value,
                            }
                        ))
                    }
                />
                -
                <input
                    type="date"
                    className="form__input"
                    onChange={(event) =>
                        setFilters((prevState) => (
                            {
                                ...prevState,
                                limit: "20000",
                                endtime: event.target.value,
                            }
                        ))
                    }
                />
            </label>
            <label className="form__label">
                Min magnitude:
                <input
                    type="number"
                    min="1"
                    max="10"
                    className="form__input"
                    onChange={(event) =>
                        setFilters((prevState) => (
                            {
                                ...prevState,
                                minmagnitude: event.target.value,
                            }
                        ))
                    }
                />
            </label>
            <label className="form__label">
                Order:
                <select
                    className="form__select"
                    onChange={(event) =>
                        setFilters((prevState) => (
                            {
                                ...prevState,
                                orderby: event.target.value,
                            }
                        ))
                    }
                    defaultValue=''
                >
                    <option value="" disabled>Select order</option>
                    <option value="time">By descending time</option>
                    <option value="time-asc">By ascending time</option>
                    <option value="magnitude">By descending magnitude</option>
                    <option value="magnitude-asc">By ascending magnitude</option>
                </select>
            </label>
            <label className="form__label">
                Alert Level:
                <select
                    className="form__select"
                    onChange={(event) =>
                        setFilters((prevState) => (
                            {
                                ...prevState,
                                alertlevel: event.target.value,
                            }
                        ))
                    }
                    defaultValue=''
                >
                    <option value="" disabled>Select alert level</option>
                    <option value="green">Green</option>
                    <option value="yellow">Yellow</option>
                    <option value="orange">Orange</option>
                    <option value="red">Red</option>
                </select>
            </label>
            <input type="submit" className="button" value="Find"/>
        </form>
    );
};
