import styled from 'styled-components';

export const Row = styled.tr`
    cursor: pointer;
    &:hover {
        background: #25252520;
    }
`;

export const RessourceBoard = styled.table`
    width: 90%;
    margin: 0 auto;
    border-spacing : 0;
    border-collapse : collapse;

    thead {
        background: #006064;
        color: #fff;

        th {
            font-weight: normal;
            font-size: 1.3em;
            padding: 15px 3%;
            text-align: left;
            :nth-child(1) {
                border-radius: 10px 0 0 0;
                width: 33%;
            }
            :nth-child(3) {
                border-radius: 0 10px 0 0;
                width: 33%;
            }
        }
    }

    tbody {
        color: #707070;
        tr:nth-child(odd) {
            background: #fff;
        }
        tr:nth-child(even) {
            background: #f5f5f5;

        }
        tr:hover {
            background: #f5f5f5;
            color: #101010;
        }
        td {
            padding: 12px 3%;
        }
    }
`;