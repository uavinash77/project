//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace salesCRMWebApi.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class leaddetail
    {
        public int id { get; set; }
        public int leadId { get; set; }
        public Nullable<System.DateTime> modifiedDate { get; set; }
        public Nullable<System.DateTime> developedDate { get; set; }
        public Nullable<System.DateTime> proposingDate { get; set; }
    
        public virtual lead lead { get; set; }
    }
}
