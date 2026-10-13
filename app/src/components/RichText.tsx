import {Fragment} from 'react';
import {Link} from 'react-router-dom';
import type {InlinePart} from '../content/siteContent';

type RichTextProps = {
    parts: InlinePart[];
    defaultLinkClassName?: string;
};

function RichText({parts, defaultLinkClassName = 'link-color'}: RichTextProps) {
    return (
        <>
            {parts.map((part, index) => {
                const key = `${part.type}-${index}`;

                switch (part.type) {
                    case 'text':
                        return <Fragment key={key}>{part.text}</Fragment>;
                    case 'icon':
                        return <span key={key} className={part.iconClass} aria-hidden="true"/>;
                    case 'route':
                        return (
                            <Link key={key} className={part.className ?? defaultLinkClassName} to={part.to}>
                                {part.text}
                            </Link>
                        );
                    case 'link':
                        return (
                            <a
                                key={key}
                                className={part.className ?? defaultLinkClassName}
                                target="_blank"
                                rel="noopener noreferrer"
                                href={part.href}
                            >
                                {part.text}
                            </a>
                        );
                    default:
                        return null;
                }
            })}
        </>
    );
}

export default RichText;

